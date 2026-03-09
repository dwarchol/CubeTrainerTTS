import { ModeOfOperation } from "aes-js";

export class MoyuTest {

    connector;

    async connectMoyuCube() {
        console.log('Connecting to Moyu cube...');
        var device: BluetoothDevice = await navigator.bluetooth.requestDevice(
            {
                filters: [
                    { namePrefix: "GAN" },
                    { namePrefix: "MG" },
                    { namePrefix: "AiCube" },
                    { namePrefix: "WCU" }
                ],
                optionalServices: ["0783b03e-7735-b5a0-1760-a305d2795cb0"]
            }
        );
        console.log('Device selected:', device);

        var mac = ['0xcf', '0x30', '0x16', '0x00', '0xb9', '0xb5'];
        // Create encryption salt from MAC address bytes placed in reverse order
        var salt = new Uint8Array(mac.map((c) => parseInt(c, 16)).reverse());

        // Connect to GATT and get device primary services
        var gatt = await device.gatt!.connect();
        var services = await gatt.getPrimaryServices("0783b03e-7735-b5a0-1760-a305d2795cb0");

        var conn = null;
        var key = [0x15, 0x77, 0x3a, 0x5c, 0x67, 0xe, 0x2d, 0x1f, 0x17, 0x67, 0x2a, 0x13, 0x9b, 0x67, 0x52, 0x57];
        var iv = [0x11, 0x23, 0x26, 0x25, 0x86, 0x2a, 0x2c, 0x3b, 0x55, 0x6, 0x7f, 0x31, 0x7e, 0x67, 0x21, 0x57];

        console.log("Detected Moyu cube service");
        for (let service of services) {
            let serviceUUID = service.uuid.toLowerCase();
            let commandCharacteristic = await service.getCharacteristic("0783b03e-7735-b5a0-1760-a305d2795cb2");
            let stateCharacteristic = await service.getCharacteristic("0783b03e-7735-b5a0-1760-a305d2795cb1");

            let encrypter = new MoyuEncrypter(new Uint8Array(key), new Uint8Array(iv), salt);
            //let driver = new MoyuProtocolDriver();

            console.log("MoyuEncrypter created");
            console.log(commandCharacteristic);
            console.log(stateCharacteristic);
            stateCharacteristic.addEventListener('characteristicvaluechanged', this.handleValeueChanged)

            stateCharacteristic.startNotifications().then(this.handleValeueChanged);



            // conn = await GanCubeClassicConnection.create(device, commandCharacteristic, stateCharacteristic, encrypter, driver);

            // console.log("Creating GanCubeClassicConnection");
            // var conn = new GanCubeClassicConnection(device, commandCharacteristic, stateCharacteristic, encrypter, driver);
            // conn.device.addEventListener('gattserverdisconnected', conn.onDisconnect);
            // (await conn.device.gatt.getPrimaryService(stateCharacteristic.service.uuid)).getCharacteristic(stateCharacteristic.uuid).then(
            //     () =>
            //         conn.stateCharacteristic.addEventListener('characteristicvaluechanged', conn.onStateUpdate)

            // );
            // await conn.stateCharacteristic.startNotifications();
            // return conn;
        }
        setTimeout(() => { console.log("Moyu cube connection established:", device); }, 5000);

    }

    handleValeueChanged(valueData) {
        console.log("Hold on...");
        valueData.addEventListener("characteristicvaluechanged", event => {
            // Everytime the value change, this should be triggered
            // If it did not, variable "ready" will stay false
            // ready = true;
            // var value = device.parseValue(event.target.value);
            // Do something with value here
            console.log("Value changed:", event.target.value);
        });

        // var check = function () {
        //     // If we have received data from characteristic, we are ready to go !
        //     if (ready === false) {
        //         console.log("Device connected but not receiving data");

        //         // Stop the current notification subscription
        //         device.stopNotificationsHeartRateMeasurement();

        //         // Start a new one
        //         device._startNotifications(some_uuid).then(handleHeartRateMeasurement);

        //         setTimeout(check, 1000); // check again in a 1s
        //     }
        //     else {
        //         console.log("Device connected and receiving data");
        //     }
        // }

        // setTimeout(() => {
        //     check();
        // }, 500);
    }



}

class MoyuEncrypter {

    private _key: Uint8Array;
    private _iv: Uint8Array;

    constructor(key: Uint8Array, iv: Uint8Array, salt: Uint8Array) {
        if (key.length != 16)
            throw new Error("Key must be 16 bytes (128-bit) long");
        if (iv.length != 16)
            throw new Error("Iv must be 16 bytes (128-bit) long");
        if (salt.length != 6)
            throw new Error("Salt must be 6 bytes (48-bit) long");
        // Apply salt to key and iv
        this._key = new Uint8Array(key);
        this._iv = new Uint8Array(iv);
        for (let i = 0; i < 6; i++) {
            this._key[i] = (key[i] + salt[i]) % 0xFF;
            this._iv[i] = (iv[i] + salt[i]) % 0xFF;
        }
    }

    /** Encrypt 16-byte buffer chunk starting at offset using AES-128-CBC */
    private encryptChunk(buffer: Uint8Array, offset: number): void {
        var cipher = new ModeOfOperation.cbc(this._key, this._iv);
        var chunk = cipher.encrypt(buffer.subarray(offset, offset + 16));
        buffer.set(chunk, offset);
    }

    /** Decrypt 16-byte buffer chunk starting at offset using AES-128-CBC */
    private decryptChunk(buffer: Uint8Array, offset: number): void {
        var cipher = new ModeOfOperation.cbc(this._key, this._iv);
        var chunk = cipher.decrypt(buffer.subarray(offset, offset + 16));
        buffer.set(chunk, offset);
    }

    encrypt(data: Uint8Array): Uint8Array {
        if (data.length < 16)
            throw Error('Data must be at least 16 bytes long');
        var res = new Uint8Array(data);
        // encrypt 16-byte chunk aligned to message start
        this.encryptChunk(res, 0);
        // encrypt 16-byte chunk aligned to message end
        if (res.length > 16) {
            this.encryptChunk(res, res.length - 16);
        }
        return res;
    }

    decrypt(data: Uint8Array): Uint8Array {
        if (data.length < 16)
            throw Error('Data must be at least 16 bytes long');
        var res = new Uint8Array(data);
        // decrypt 16-byte chunk aligned to message end
        if (res.length > 16) {
            this.decryptChunk(res, res.length - 16);
        }
        // decrypt 16-byte chunk aligned to message start
        this.decryptChunk(res, 0);
        return res;
    }

}

// class MoyuProtocolDriver implements GanProtocolDriver {

//     private serial: number = -1;
//     private lastSerial: number = -1;
//     private lastLocalTimestamp: number | null = null;
//     private moveBuffer: GanCubeEvent[] = [];

//     // Used to store partial result acquired from hardware info events
//     private hwInfo: { [key: number]: string } = {};

//     createCommandMessage(command: GanCubeCommand): Uint8Array | undefined {
//         console.log("MoyuProtocolDriver");
//         var msg: Uint8Array | undefined = new Uint8Array(20).fill(0);
//         switch (command.type) {
//             case 'REQUEST_FACELETS':
//                 msg.set([0xA3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
//                 console.log("REQUEST_FACELETS");
//                 break;
//             case 'REQUEST_HARDWARE':
//                 this.hwInfo = {};
//                 msg.set([0xA1, 0x03, 0x00, 0x00, 0x00]);
//                 break;
//             case 'REQUEST_BATTERY':
//                 msg.set([0xA4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
//                 break;
//             case 'REQUEST_RESET':
//                 msg.set([0xD2, 0x0D, 0x05, 0x39, 0x77, 0x00, 0x00, 0x01, 0x23, 0x45, 0x67, 0x89, 0xAB, 0x00, 0x00, 0x00]);
//                 break;
//             default:
//                 msg = undefined;
//         }
//         return msg;
//     }

//     /** Private cube command for requesting move history */
//     private async requestMoveHistory(conn: GanCubeRawConnection, serial: number, count: number): Promise<void> {
//         var msg = new Uint8Array(20).fill(0);
//         // Move history response data is byte-aligned, and moves always starting with near-ceil odd serial number, regardless of requested.
//         // Adjust serial and count to get odd serial aligned history window with even number of moves inside.
//         if (serial % 2 == 0)
//             serial = (serial - 1) & 0xFF;
//         if (count % 2 == 1)
//             count++;
//         // Never overflow requested history window beyond the serial number cycle edge 255 -> 0.
//         // Because due to firmware bug the moves beyond the edge will be spoofed with 'D' (just zero bytes).
//         count = Math.min(count, serial + 1);
//         msg.set([0xD1, 0x04, serial, 0, count, 0]);
//         return conn.sendCommandMessage(msg).catch(() => {
//             // We can safely suppress and ignore possible GATT write errors, requestMoveHistory command is automatically retried on next move event
//         });
//     }

//     /**
//      * Evict move events from FIFO buffer until missing move event detected
//      * In case of missing move, and if connection is provided, submit request for move history to fill gap in buffer
//      */
//     private async evictMoveBuffer(conn?: GanCubeRawConnection): Promise<Array<GanCubeEvent>> {
//         var evictedEvents: GanCubeEvent[] = [];
//         while (this.moveBuffer.length > 0) {
//             let bufferHead = this.moveBuffer[0] as GanCubeMoveEvent;
//             let diff = this.lastSerial == -1 ? 1 : (bufferHead.serial - this.lastSerial) & 0xFF;
//             if (diff > 1) {
//                 if (conn) {
//                     await this.requestMoveHistory(conn, bufferHead.serial, diff);
//                 }
//                 break;
//             } else {
//                 evictedEvents.push(this.moveBuffer.shift()!);
//                 this.lastSerial = bufferHead.serial;
//             }
//         }
//         // Probably something went wrong and buffer is no longer evicted, so forcibly disconnect the cube
//         if (conn && this.moveBuffer.length > 16) {
//             conn.disconnect();
//         }
//         return evictedEvents;
//     }

//     /**
//      * Check if circular serial number (modulo 256) fits into (start,end) serial number range.
//      * By default range is open, set closedStart / closedEnd to make it closed.
//      */
//     private isSerialInRange(start: number, end: number, serial: number, closedStart = false, closedEnd = false) {
//         return ((end - start) & 0xFF) >= ((serial - start) & 0xFF)
//             && (closedStart || ((start - serial) & 0xFF) > 0)
//             && (closedEnd || ((end - serial) & 0xFF) > 0);
//     }

//     /** Used to inject missed moves to FIFO buffer */
//     private injectMissedMoveToBuffer(move: GanCubeEvent) {
//         if (move.type == "MOVE") {
//             if (this.moveBuffer.length > 0) {
//                 var bufferHead = this.moveBuffer[0] as GanCubeMoveEvent;
//                 // Skip if move event with the same serial already in the buffer
//                 if (this.moveBuffer.some(e => e.type == "MOVE" && e.serial == move.serial))
//                     return;
//                 // Skip if move serial does not fit in range between last evicted event and event on buffer head, i.e. event must be one of missed
//                 if (!this.isSerialInRange(this.lastSerial, bufferHead.serial, move.serial))
//                     return;
//                 // Move history events should be injected in reverse order, so just put suitable event on buffer head
//                 if (move.serial == ((bufferHead.serial - 1) & 0xFF)) {
//                     this.moveBuffer.unshift(move);
//                 }
//             } else {
//                 // This case happens when lost move is recovered using periodic
//                 // facelets state event, and being inserted into the empty buffer.
//                 if (this.isSerialInRange(this.lastSerial, this.serial, move.serial, false, true)) {
//                     this.moveBuffer.unshift(move);
//                 }
//             }
//         }
//     }

//     /** Used in response to periodic facelets event to check if any moves missed */
//     private async checkIfMoveMissed(conn: GanCubeRawConnection) {
//         let diff = (this.serial - this.lastSerial) & 0xFF;
//         if (diff > 0) {
//             if (this.serial != 0) { // Constraint to avoid firmware bug with facelets state event at 255 move counter
//                 let bufferHead = this.moveBuffer[0] as GanCubeMoveEvent;
//                 let startSerial = bufferHead ? bufferHead.serial : (this.serial + 1) & 0xFF;
//                 await this.requestMoveHistory(conn, startSerial, diff + 1);
//             }
//         }
//     }

//     async handleStateEvent(conn: GanCubeRawConnection, eventMessage: Uint8Array): Promise<GanCubeEvent[]> {
//         console.log("MoyuProtocolDriver handleStateEvent");
//         var timestamp = now();

//         var cubeEvents: GanCubeEvent[] = [];
//         var msg = new GanProtocolMessageView(eventMessage);

//         var eventType = msg.getBitWord(0, 8);
//         var dataLength = msg.getBitWord(8, 8);

//         if (eventType == 0x01) { // MOVE

//             if (this.lastSerial != -1) { // Accept move events only after first facelets state event received

//                 this.lastLocalTimestamp = timestamp;
//                 let cubeTimestamp = msg.getBitWord(16, 32, true);
//                 let serial = this.serial = msg.getBitWord(48, 16, true);

//                 let direction = msg.getBitWord(64, 2);
//                 let face = [2, 32, 8, 1, 16, 4].indexOf(msg.getBitWord(66, 6));
//                 let move = "URFDLB".charAt(face) + " '".charAt(direction);

//                 // put move event into FIFO buffer
//                 if (face >= 0) {
//                     this.moveBuffer.push({
//                         type: "MOVE",
//                         serial: serial,
//                         timestamp: timestamp,
//                         localTimestamp: timestamp,
//                         cubeTimestamp: cubeTimestamp,
//                         face: face,
//                         direction: direction,
//                         move: move.trim()
//                     });
//                 }

//                 // evict move events from FIFO buffer
//                 cubeEvents = await this.evictMoveBuffer(conn);

//             }

//         } else if (eventType == 0xD1) { // MOVE_HISTORY

//             let startSerial = msg.getBitWord(16, 8);
//             let count = (dataLength - 1) * 2;

//             // inject missed moves into FIFO buffer
//             for (let i = 0; i < count; i++) {
//                 let face = [1, 5, 3, 0, 4, 2].indexOf(msg.getBitWord(24 + 4 * i, 3));
//                 let direction = msg.getBitWord(27 + 4 * i, 1);
//                 if (face >= 0) {
//                     let move = "URFDLB".charAt(face) + " '".charAt(direction);
//                     this.injectMissedMoveToBuffer({
//                         type: "MOVE",
//                         serial: (startSerial - i) & 0xFF,
//                         timestamp: timestamp,
//                         localTimestamp: null, // Missed and recovered events has no meaningfull local timestamps
//                         cubeTimestamp: null,  // Cube hardware timestamp for missed move you should interpolate using cubeTimestampLinearFit
//                         face: face,
//                         direction: direction,
//                         move: move.trim()
//                     });
//                 }
//             }

//             // evict move events from FIFO buffer
//             cubeEvents = await this.evictMoveBuffer();

//         } else if (eventType == 0xED) { // FACELETS

//             let serial = this.serial = msg.getBitWord(16, 16, true);

//             // Also check and recovery missed moves using periodic facelets event sent by cube
//             if (this.lastSerial != -1) {
//                 // Debounce the facelet event if there are active cube moves
//                 if (this.lastLocalTimestamp != null && (timestamp - this.lastLocalTimestamp) > 500) {
//                     await this.checkIfMoveMissed(conn);
//                 }
//             }

//             if (this.lastSerial == -1)
//                 this.lastSerial = serial;

//             // Corner/Edge Permutation/Orientation
//             let cp: Array<number> = [];
//             let co: Array<number> = [];
//             let ep: Array<number> = [];
//             let eo: Array<number> = [];

//             // Corners
//             for (let i = 0; i < 7; i++) {
//                 cp.push(msg.getBitWord(32 + i * 3, 3));
//                 co.push(msg.getBitWord(53 + i * 2, 2));
//             }
//             cp.push(28 - sum(cp));
//             co.push((3 - (sum(co) % 3)) % 3);

//             // Edges
//             for (let i = 0; i < 11; i++) {
//                 ep.push(msg.getBitWord(69 + i * 4, 4));
//                 eo.push(msg.getBitWord(113 + i, 1));
//             }
//             ep.push(66 - sum(ep));
//             eo.push((2 - (sum(eo) % 2)) % 2);

//             cubeEvents.push({
//                 type: "FACELETS",
//                 serial: serial,
//                 timestamp: timestamp,
//                 facelets: toKociembaFacelets(cp, co, ep, eo),
//                 state: {
//                     CP: cp,
//                     CO: co,
//                     EP: ep,
//                     EO: eo
//                 },
//             });

//         } else if (eventType >= 0xFA && eventType <= 0xFE) { // HARDWARE

//             switch (eventType) {
//                 case 0xFA: // Product Date
//                     let year = msg.getBitWord(24, 16, true);
//                     let month = msg.getBitWord(40, 8);
//                     let day = msg.getBitWord(48, 8);
//                     this.hwInfo[eventType] = `${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
//                     break;
//                 case 0xFC: // Hardware Name
//                     this.hwInfo[eventType] = '';
//                     for (var i = 0; i < dataLength - 1; i++) {
//                         this.hwInfo[eventType] += String.fromCharCode(msg.getBitWord(i * 8 + 24, 8));
//                     }
//                     break;
//                 case 0xFD: // Software Version
//                     let swMajor = msg.getBitWord(24, 4);
//                     let swMinor = msg.getBitWord(28, 4);
//                     this.hwInfo[eventType] = `${swMajor}.${swMinor}`;
//                     break;
//                 case 0xFE: // Hardware Version
//                     let hwMajor = msg.getBitWord(24, 4);
//                     let hwMinor = msg.getBitWord(28, 4);
//                     this.hwInfo[eventType] = `${hwMajor}.${hwMinor}`;
//                     break;
//             }

//             if (Object.keys(this.hwInfo).length == 4) { // All fields are populated
//                 cubeEvents.push({
//                     type: "HARDWARE",
//                     timestamp: timestamp,
//                     hardwareName: this.hwInfo[0xFC],
//                     hardwareVersion: this.hwInfo[0xFE],
//                     softwareVersion: this.hwInfo[0xFD],
//                     productDate: this.hwInfo[0xFA],
//                     gyroSupported: ['GAN12uiM'].indexOf(this.hwInfo[0xFC]) != -1
//                 });
//             }

//         } else if (eventType == 0xEC) { // GYRO

//             // Orientation Quaternion
//             let qw = msg.getBitWord(16, 16);
//             let qx = msg.getBitWord(32, 16);
//             let qy = msg.getBitWord(48, 16);
//             let qz = msg.getBitWord(64, 16);

//             // Angular Velocity
//             let vx = msg.getBitWord(80, 4);
//             let vy = msg.getBitWord(84, 4);
//             let vz = msg.getBitWord(88, 4);

//             cubeEvents.push({
//                 type: "GYRO",
//                 timestamp: timestamp,
//                 quaternion: {
//                     x: (1 - (qx >> 15) * 2) * (qx & 0x7FFF) / 0x7FFF,
//                     y: (1 - (qy >> 15) * 2) * (qy & 0x7FFF) / 0x7FFF,
//                     z: (1 - (qz >> 15) * 2) * (qz & 0x7FFF) / 0x7FFF,
//                     w: (1 - (qw >> 15) * 2) * (qw & 0x7FFF) / 0x7FFF
//                 },
//                 velocity: {
//                     x: (1 - (vx >> 3) * 2) * (vx & 0x7),
//                     y: (1 - (vy >> 3) * 2) * (vy & 0x7),
//                     z: (1 - (vz >> 3) * 2) * (vz & 0x7)
//                 }
//             });

//         } else if (eventType == 0xEF) { // BATTERY

//             let batteryLevel = msg.getBitWord(8 + dataLength * 8, 8);

//             cubeEvents.push({
//                 type: "BATTERY",
//                 timestamp: timestamp,
//                 batteryLevel: Math.min(batteryLevel, 100)
//             });

//         } else if (eventType == 0xEA) { // DISCONNECT
//             conn.disconnect();
//         }

//         return cubeEvents;

//     }

// }