import { Injectable } from '@angular/core';
import { GanCubeConnection } from '../smart-cube/smart-cube-protocol';
import { MacAddressProvider, connectGanCube } from '../smart-cube/smart-cube';
import TestNowy from './test-nowy/test-nowy';

@Injectable({
  providedIn: 'root'
})
export class CubeService {
  public cubeState: GanCubeState | null = null;
  public newState: GanCubeState | null = null;
  connection: GanCubeConnection | null = null;
  temp = 0;
  private funcTest: (done: boolean) => void = () => { };

  async connectCube(model: string) {
    if (model === "GAN") {
      await this.connectGANCube();
    }
    else if (model === "MOYU") {
      await this.connectMOYUCube();
    }
  }
  async connectMOYUCube() {
    console.log("Moyu connection not implemented yet");
    this.cubeState = {
      CP: [0, 1, 2, 3, 4, 5, 6, 7],
      CO: [0, 0, 0, 0, 0, 0, 0, 0],
      EP: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      EO: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    // var mac = 'cf:30:16:00:b9:b5'
    await connect(this);
  }

  async makeMove(move: string) {
    console.log(this.cubeState);
    console.log("Making move: " + move);
    if (move == "U ") {
      var tempEO = this.cubeState!.EO[0];
      this.cubeState!.EO[0] = this.cubeState!.EO[3];
      this.cubeState!.EO[3] = this.cubeState!.EO[2];
      this.cubeState!.EO[2] = this.cubeState!.EO[1];
      this.cubeState!.EO[1] = tempEO;
      var tempEP = this.cubeState!.EP[0];
      this.cubeState!.EP[0] = this.cubeState!.EP[3];
      this.cubeState!.EP[3] = this.cubeState!.EP[2];
      this.cubeState!.EP[2] = this.cubeState!.EP[1];
      this.cubeState!.EP[1] = tempEP;
      var tempCP = this.cubeState!.CP[0];
      this.cubeState!.CP[0] = this.cubeState!.CP[3];
      this.cubeState!.CP[3] = this.cubeState!.CP[2];
      this.cubeState!.CP[2] = this.cubeState!.CP[1];
      this.cubeState!.CP[1] = tempCP;
      var tempCO = this.cubeState!.CO[0];
      this.cubeState!.CO[0] = this.cubeState!.CO[3];
      this.cubeState!.CO[3] = this.cubeState!.CO[2];
      this.cubeState!.CO[2] = this.cubeState!.CO[1];
      this.cubeState!.CO[1] = tempCO;
    }
    else if (move == "U'") {
      var tempEO = this.cubeState!.EO[0];
      this.cubeState!.EO[0] = this.cubeState!.EO[1];
      this.cubeState!.EO[1] = this.cubeState!.EO[2];
      this.cubeState!.EO[2] = this.cubeState!.EO[3];
      this.cubeState!.EO[3] = tempEO;
      var tempEP = this.cubeState!.EP[0];
      this.cubeState!.EP[0] = this.cubeState!.EP[1];
      this.cubeState!.EP[1] = this.cubeState!.EP[2];
      this.cubeState!.EP[2] = this.cubeState!.EP[3];
      this.cubeState!.EP[3] = tempEP;
      var tempCP = this.cubeState!.CP[0];
      this.cubeState!.CP[0] = this.cubeState!.CP[1];
      this.cubeState!.CP[1] = this.cubeState!.CP[2];
      this.cubeState!.CP[2] = this.cubeState!.CP[3];
      this.cubeState!.CP[3] = tempCP;
      var tempCO = this.cubeState!.CO[0];
      this.cubeState!.CO[0] = this.cubeState!.CO[1];
      this.cubeState!.CO[1] = this.cubeState!.CO[2];
      this.cubeState!.CO[2] = this.cubeState!.CO[3];
      this.cubeState!.CO[3] = tempCO;
    }
    else if (move == "D ") {
      var tempEO = this.cubeState!.EO[4];
      this.cubeState!.EO[4] = this.cubeState!.EO[5];
      this.cubeState!.EO[5] = this.cubeState!.EO[6];
      this.cubeState!.EO[6] = this.cubeState!.EO[7];
      this.cubeState!.EO[7] = tempEO;
      var tempEP = this.cubeState!.EP[4];
      this.cubeState!.EP[4] = this.cubeState!.EP[5];
      this.cubeState!.EP[5] = this.cubeState!.EP[6];
      this.cubeState!.EP[6] = this.cubeState!.EP[7];
      this.cubeState!.EP[7] = tempEP;
      var tempCP = this.cubeState!.CP[4];
      this.cubeState!.CP[4] = this.cubeState!.CP[5];
      this.cubeState!.CP[5] = this.cubeState!.CP[6];
      this.cubeState!.CP[6] = this.cubeState!.CP[7];
      this.cubeState!.CP[7] = tempCP;
      var tempCO = this.cubeState!.CO[4];
      this.cubeState!.CO[4] = this.cubeState!.CO[5];
      this.cubeState!.CO[5] = this.cubeState!.CO[6];
      this.cubeState!.CO[6] = this.cubeState!.CO[7];
      this.cubeState!.CO[7] = tempCO;

    }
    else if (move == "D'") {
      var tempEO = this.cubeState!.EO[4];
      this.cubeState!.EO[4] = this.cubeState!.EO[7];
      this.cubeState!.EO[7] = this.cubeState!.EO[6];
      this.cubeState!.EO[6] = this.cubeState!.EO[5];
      this.cubeState!.EO[5] = tempEO;
      var tempEP = this.cubeState!.EP[4];
      this.cubeState!.EP[4] = this.cubeState!.EP[7];
      this.cubeState!.EP[7] = this.cubeState!.EP[6];
      this.cubeState!.EP[6] = this.cubeState!.EP[5];
      this.cubeState!.EP[5] = tempEP;
      var tempCP = this.cubeState!.CP[4];
      this.cubeState!.CP[4] = this.cubeState!.CP[7];
      this.cubeState!.CP[7] = this.cubeState!.CP[6];
      this.cubeState!.CP[6] = this.cubeState!.CP[5];
      this.cubeState!.CP[5] = tempCP;
      var tempCO = this.cubeState!.CO[4];
      this.cubeState!.CO[4] = this.cubeState!.CO[7];
      this.cubeState!.CO[7] = this.cubeState!.CO[6];
      this.cubeState!.CO[6] = this.cubeState!.CO[5];
      this.cubeState!.CO[5] = tempCO;
    }
    else if (move == "R ") {
      var tempEO = this.cubeState!.EO[0];
      this.cubeState!.EO[0] = this.cubeState!.EO[8];
      this.cubeState!.EO[8] = this.cubeState!.EO[4];
      this.cubeState!.EO[4] = this.cubeState!.EO[11];
      this.cubeState!.EO[11] = tempEO;
      var tempEP = this.cubeState!.EP[0];
      this.cubeState!.EP[0] = this.cubeState!.EP[8];
      this.cubeState!.EP[8] = this.cubeState!.EP[4];
      this.cubeState!.EP[4] = this.cubeState!.EP[11];
      this.cubeState!.EP[11] = tempEP;
      var tempCP = this.cubeState!.CP[0];
      this.cubeState!.CP[0] = this.cubeState!.CP[4];
      this.cubeState!.CP[4] = this.cubeState!.CP[7];
      this.cubeState!.CP[7] = this.cubeState!.CP[3];
      this.cubeState!.CP[3] = tempCP;
      var tempCO = this.cubeState!.CO[0];
      this.cubeState!.CO[0] = (this.cubeState!.CO[4] + 2) % 3;
      this.cubeState!.CO[4] = (this.cubeState!.CO[7] + 1) % 3;
      this.cubeState!.CO[7] = (this.cubeState!.CO[3] + 2) % 3;
      this.cubeState!.CO[3] = (tempCO + 1) % 3;

    }
    else if (move == "R'") {
      var tempEO = this.cubeState!.EO[0];
      this.cubeState!.EO[0] = this.cubeState!.EO[11];
      this.cubeState!.EO[11] = this.cubeState!.EO[4];
      this.cubeState!.EO[4] = this.cubeState!.EO[8];
      this.cubeState!.EO[8] = tempEO;
      var tempEP = this.cubeState!.EP[0];
      this.cubeState!.EP[0] = this.cubeState!.EP[11];
      this.cubeState!.EP[11] = this.cubeState!.EP[4];
      this.cubeState!.EP[4] = this.cubeState!.EP[8];
      this.cubeState!.EP[8] = tempEP;
      var tempCP = this.cubeState!.CP[0];
      this.cubeState!.CP[0] = this.cubeState!.CP[3];
      this.cubeState!.CP[3] = this.cubeState!.CP[7];
      this.cubeState!.CP[7] = this.cubeState!.CP[4];
      this.cubeState!.CP[4] = tempCP;
      var tempCO = this.cubeState!.CO[0];
      this.cubeState!.CO[0] = (this.cubeState!.CO[3] + 2) % 3;
      this.cubeState!.CO[3] = (this.cubeState!.CO[7] + 1) % 3;
      this.cubeState!.CO[7] = (this.cubeState!.CO[4] + 2) % 3;
      this.cubeState!.CO[4] = (tempCO + 1) % 3;
    }
    else if (move == "L ") {
      var tempEO = this.cubeState!.EO[2];
      this.cubeState!.EO[2] = this.cubeState!.EO[10];
      this.cubeState!.EO[10] = this.cubeState!.EO[6];
      this.cubeState!.EO[6] = this.cubeState!.EO[9];
      this.cubeState!.EO[9] = tempEO;
      var tempEP = this.cubeState!.EP[2];
      this.cubeState!.EP[2] = this.cubeState!.EP[10];
      this.cubeState!.EP[10] = this.cubeState!.EP[6];
      this.cubeState!.EP[6] = this.cubeState!.EP[9];
      this.cubeState!.EP[9] = tempEP;
      var tempCP = this.cubeState!.CP[1];
      this.cubeState!.CP[1] = this.cubeState!.CP[2];
      this.cubeState!.CP[2] = this.cubeState!.CP[6];
      this.cubeState!.CP[6] = this.cubeState!.CP[5];
      this.cubeState!.CP[5] = tempCP;
      var tempCO = this.cubeState!.CO[1];
      this.cubeState!.CO[1] = (this.cubeState!.CO[2] + 1) % 3;
      this.cubeState!.CO[2] = (this.cubeState!.CO[6] + 2) % 3;
      this.cubeState!.CO[6] = (this.cubeState!.CO[5] + 1) % 3;
      this.cubeState!.CO[5] = (tempCO + 2) % 3;

    }
    else if (move == "L'") {
      var tempEO = this.cubeState!.EO[2];
      this.cubeState!.EO[2] = this.cubeState!.EO[9];
      this.cubeState!.EO[9] = this.cubeState!.EO[6];
      this.cubeState!.EO[6] = this.cubeState!.EO[10];
      this.cubeState!.EO[10] = tempEO;
      var tempEP = this.cubeState!.EP[2];
      this.cubeState!.EP[2] = this.cubeState!.EP[9];
      this.cubeState!.EP[9] = this.cubeState!.EP[6];
      this.cubeState!.EP[6] = this.cubeState!.EP[10];
      this.cubeState!.EP[10] = tempEP;
      var tempCP = this.cubeState!.CP[1];
      this.cubeState!.CP[1] = this.cubeState!.CP[5];
      this.cubeState!.CP[5] = this.cubeState!.CP[6];
      this.cubeState!.CP[6] = this.cubeState!.CP[2];
      this.cubeState!.CP[2] = tempCP;
      var tempCO = this.cubeState!.CO[1];
      this.cubeState!.CO[1] = (this.cubeState!.CO[5] + 1) % 3;
      this.cubeState!.CO[5] = (this.cubeState!.CO[6] + 2) % 3;
      this.cubeState!.CO[6] = (this.cubeState!.CO[2] + 1) % 3;
      this.cubeState!.CO[2] = (tempCO + 2) % 3;
    }
    else if (move == "F ") {
      var tempEO = this.cubeState!.EO[1];
      this.cubeState!.EO[1] = (this.cubeState!.EO[9] + 1) % 2;
      this.cubeState!.EO[9] = (this.cubeState!.EO[5] + 1) % 2;
      this.cubeState!.EO[5] = (this.cubeState!.EO[8] + 1) % 2;
      this.cubeState!.EO[8] = (tempEO + 1) % 2;
      var tempEP = this.cubeState!.EP[1];
      this.cubeState!.EP[1] = this.cubeState!.EP[9];
      this.cubeState!.EP[9] = this.cubeState!.EP[5];
      this.cubeState!.EP[5] = this.cubeState!.EP[8];
      this.cubeState!.EP[8] = tempEP;
      var tempCP = this.cubeState!.CP[0];
      this.cubeState!.CP[0] = this.cubeState!.CP[1];
      this.cubeState!.CP[1] = this.cubeState!.CP[5];
      this.cubeState!.CP[5] = this.cubeState!.CP[4];
      this.cubeState!.CP[4] = tempCP;
      var tempCO = this.cubeState!.CO[0];
      this.cubeState!.CO[0] = (this.cubeState!.CO[1] + 1) % 3;
      this.cubeState!.CO[1] = (this.cubeState!.CO[5] + 2) % 3;
      this.cubeState!.CO[5] = (this.cubeState!.CO[4] + 1) % 3;
      this.cubeState!.CO[4] = (tempCO + 2) % 3;
    }
    else if (move == "F'") {
      var tempEO = this.cubeState!.EO[1];
      this.cubeState!.EO[1] = (this.cubeState!.EO[8] + 1) % 2;
      this.cubeState!.EO[8] = (this.cubeState!.EO[5] + 1) % 2;
      this.cubeState!.EO[5] = (this.cubeState!.EO[9] + 1) % 2;
      this.cubeState!.EO[9] = (tempEO + 1) % 2;
      var tempEP = this.cubeState!.EP[1];
      this.cubeState!.EP[1] = this.cubeState!.EP[8];
      this.cubeState!.EP[8] = this.cubeState!.EP[5];
      this.cubeState!.EP[5] = this.cubeState!.EP[9];
      this.cubeState!.EP[9] = tempEP;
      var tempCP = this.cubeState!.CP[0];
      this.cubeState!.CP[0] = this.cubeState!.CP[4];
      this.cubeState!.CP[4] = this.cubeState!.CP[5];
      this.cubeState!.CP[5] = this.cubeState!.CP[1];
      this.cubeState!.CP[1] = tempCP;
      var tempCO = this.cubeState!.CO[0];
      this.cubeState!.CO[0] = (this.cubeState!.CO[4] + 1) % 3;
      this.cubeState!.CO[4] = (this.cubeState!.CO[5] + 2) % 3;
      this.cubeState!.CO[5] = (this.cubeState!.CO[1] + 1) % 3;
      this.cubeState!.CO[1] = (tempCO + 2) % 3;
    }
    else if (move == "B ") {
      var tempEO = this.cubeState!.EO[3];
      this.cubeState!.EO[3] = (this.cubeState!.EO[11] + 1) % 2;
      this.cubeState!.EO[11] = (this.cubeState!.EO[7] + 1) % 2;
      this.cubeState!.EO[7] = (this.cubeState!.EO[10] + 1) % 2;
      this.cubeState!.EO[10] = (tempEO + 1) % 2;
      var tempEP = this.cubeState!.EP[3];
      this.cubeState!.EP[3] = this.cubeState!.EP[11];
      this.cubeState!.EP[11] = this.cubeState!.EP[7];
      this.cubeState!.EP[7] = this.cubeState!.EP[10];
      this.cubeState!.EP[10] = tempEP;
      var tempCP = this.cubeState!.CP[2];
      this.cubeState!.CP[2] = this.cubeState!.CP[3];
      this.cubeState!.CP[3] = this.cubeState!.CP[7];
      this.cubeState!.CP[7] = this.cubeState!.CP[6];
      this.cubeState!.CP[6] = tempCP;
      var tempCO = this.cubeState!.CO[2];
      this.cubeState!.CO[2] = (this.cubeState!.CO[3] + 1) % 3;
      this.cubeState!.CO[3] = (this.cubeState!.CO[7] + 2) % 3;
      this.cubeState!.CO[7] = (this.cubeState!.CO[6] + 1) % 3;
      this.cubeState!.CO[6] = (tempCO + 2) % 3;
    }
    else if (move == "B'") {
      var tempEO = this.cubeState!.EO[3];
      this.cubeState!.EO[3] = (this.cubeState!.EO[10] + 1) % 2;
      this.cubeState!.EO[10] = (this.cubeState!.EO[7] + 1) % 2;
      this.cubeState!.EO[7] = (this.cubeState!.EO[11] + 1) % 2;
      this.cubeState!.EO[11] = (tempEO + 1) % 2;
      var tempEP = this.cubeState!.EP[3];
      this.cubeState!.EP[3] = this.cubeState!.EP[10];
      this.cubeState!.EP[10] = this.cubeState!.EP[7];
      this.cubeState!.EP[7] = this.cubeState!.EP[11];
      this.cubeState!.EP[11] = tempEP;
      var tempCP = this.cubeState!.CP[2];
      this.cubeState!.CP[2] = this.cubeState!.CP[6];
      this.cubeState!.CP[6] = this.cubeState!.CP[7];
      this.cubeState!.CP[7] = this.cubeState!.CP[3];
      this.cubeState!.CP[3] = tempCP;
      var tempCO = this.cubeState!.CO[2];
      this.cubeState!.CO[2] = (this.cubeState!.CO[6] + 1) % 3;
      this.cubeState!.CO[6] = (this.cubeState!.CO[7] + 2) % 3;
      this.cubeState!.CO[7] = (this.cubeState!.CO[3] + 1) % 3;
      this.cubeState!.CO[3] = (tempCO + 2) % 3;
    }
    console.log(this.cubeState);
    console.log(this.newState);
    if (JSON.stringify(this.cubeState) == JSON.stringify(this.newState)) {
      console.log("done")
      this.funcTest(true);
      this.temp++;
    }
  }



  async connectGANCube() {
    console.log('Connecting to cube...');
    this.connection = await connectGanCube(this.customMacAddressProvider);
    console.log('Connected to cube:', this.connection);
    this.getState()
    console.log('Getting state... BLEEEEEE');
    this.connection.events$.subscribe();
    console.log('Subscribed to events', this.connection);
    this.connection.events$.subscribe(event => {
      console.log(event);
      if (event.type === 'MOVE') {
        console.log('Ruch:', event);
        this.getState();
        console.log(JSON.stringify(this.cubeState))
        console.log(JSON.stringify(this.newState))

      }
      else if (event.type === 'FACELETS') {
        console.log('Facelets:', event.state);
        this.cubeState = event.state;
        if (JSON.stringify(this.cubeState) == JSON.stringify(this.newState)) {
          console.log("done")
          this.funcTest(true);
          this.temp++;
        }
      }

    });
  }

  customMacAddressProvider: MacAddressProvider = async (device, isFallbackCall): Promise<string | null> => {
    if (isFallbackCall) {
      return prompt('Unable do determine cube MAC address!\nPlease enter MAC address manually:');
    } else {
      return typeof device.watchAdvertisements == 'function' ? null :
        prompt('Seems like your browser does not support Web Bluetooth watchAdvertisements() API. Enable following flag in Chrome:\n\nchrome://flags/#enable-experimental-web-platform-features\n\nor enter cube MAC address manually:');
    }
  };

  getState() {
    console.log("Getting state...");
    if (this.connection) {
      this.connection.sendCubeCommand({ type: "REQUEST_FACELETS" })
    }
  }
  resetCube() {
    if (this.connection) {
      this.connection.sendCubeCommand({ type: "REQUEST_RESET" })
    }
  }

  setFunction(fn: (done: boolean) => void) {
    this.funcTest = fn;
  }

}
export type GanCubeState = {
  /** Corner Permutation: 8 elements, values from 0 to 7 */
  CP: Array<number>;
  /** Corner Orientation: 8 elements, values from 0 to 2 */
  CO: Array<number>;
  /** Edge Permutation: 12 elements, values from 0 to 11 */
  EP: Array<number>;
  /** Edge Orientation: 12 elements, values from 0 to 1 */
  EO: Array<number>;
};


function toUuid128(uuid) {
  if (/^[0-9A-Fa-f]{4}$/.exec(uuid)) {
    uuid = "0000" + uuid + "-0000-1000-8000-00805F9B34FB";
  }
  return uuid.toUpperCase();
}

function matchUUID(uuid1, uuid2) {
  return toUuid128(uuid1) == toUuid128(uuid2);
}

const QIYI_SERVICE_UUID = '0000fff0-0000-1000-8000-00805f9b34fb';
const MOYUV10_SERVICE_UUID = '0783b03e-7735-b5a0-1760-a305d2795cb0';

// get a supported smart cube device
async function connect(cubeService) {
  var device = await navigator.bluetooth.requestDevice(
    {
      filters: [
        { namePrefix: "QY-QYSC" },
        { namePrefix: 'WCU_MY32' },
      ],
      optionalServices: [
        QIYI_SERVICE_UUID,
        MOYUV10_SERVICE_UUID,
      ],
    }
  );

  if (device.name.startsWith("WCU_MY32")) {
    return new MoyuV10CubeConnection(device, null, cubeService);
  }

  return null;
}

class SmartCubeConnection {
  device;
  deviceName;
  mac;
  chrctCube;

  cubeService;

  constructor(device, applyMoves, cubeService) {
    if (this.constructor === SmartCubeConnection) {
      throw new Error("Cannot instantiate abstract class.");
    }

    this.device = device;
    this.deviceName = "";
    this.mac = "";
    this.chrctCube = null;
    // CubeService must be passed in from an Angular injection context (component/service).
    this.cubeService = cubeService || null;
  }

  // call this after the instance is initiated
  initAsync() {
    throw new Error("Method 'initAsync()' must be implemented.");
  }

  async disconnect() {
    this.chrctCube.removeEventListener('characteristicvaluechanged', this.onCubeEvent);
    this.chrctCube.stopNotifications();
    this.device.gatt.disconnect();
  }

  onCubeEvent(event) {
    throw new Error("Method 'onCubeEvent(event)' must be implemented.");
  }
}


class MoyuV10CubeConnection extends SmartCubeConnection {
  serviceUuid;
  chrctUuidRead;
  chrctUuidWrite;
  chrctWrite;
  cic_list;
  keys;
  decoder;
  lastTs;
  moveCnt;
  prevMoveCnt;
  prevMoves;

  constructor(device, applyMove, cubeService) {
    super(device, applyMove, cubeService);

    this.serviceUuid = '0783b03e-7735-b5a0-1760-a305d2795cb0';
    this.chrctUuidRead = '0783b03e-7735-b5a0-1760-a305d2795cb1';
    this.chrctUuidWrite = '0783b03e-7735-b5a0-1760-a305d2795cb2';

    this.chrctWrite = null;

    this.cic_list = [0x0000, 0x0100];
    this.keys = [
      'NoJgjANGYJwQrADgjEUAMBmKAWCP4JNIRswt81Yp5DztE1EB2AXSA',
      'NoRg7ANAzArNAc1IigFgqgTB9MCcE8cAbBCJpKgeaSAAxTSPxgC6QA'
    ];

    this.decoder = null;

    this.deviceName = this.device.name.trim();

    // 00 for v10 ai
    this.mac = 'cf:30:16:00:b9:b5';

    this.lastTs = 0;
    this.moveCnt = -1;
    this.prevMoveCnt = -1;
    this.prevMoves = [];
    // console.log('[Moyu32Cube]', 'constructed MoyuV10CubeConnection');
    this.initAsync();
  }

  getKeyAndIv(value) {
    var key = [21, 119, 58, 92, 103, 14, 45, 31, 23, 103, 42, 19, 155, 103, 82, 87];
    var iv = [17, 35, 38, 37, 134, 42, 44, 59, 85, 6, 127, 49, 126, 103, 33, 87];
    for (var i = 0; i < 6; i++) {
      key[i] = (key[i] + value[5 - i]) % 255;
      iv[i] = (iv[i] + value[5 - i]) % 255;
    }
    // console.log(key);
    // console.log(iv);
    return [key, iv];
  }

  initDecoder() {
    // console.log('[Moyu32Cube]', 'initDecoder');
    var value = [];
    for (var i = 0; i < 6; i++) {
      value.push(parseInt(this.mac.slice(i * 3, i * 3 + 2), 16));
    }
    var keyiv = this.getKeyAndIv(value);
    // console.log('[Moyu32Cube] key=', JSON.stringify(keyiv));
    this.decoder = new aes128(keyiv[0]);
    this.decoder.iv = keyiv[1];
    // console.log('[Moyu32Cube]', 'decoder initialized' + this.decoder);
  }

  decode(value) {
    var ret = [];
    for (var i = 0; i < value.byteLength; i++) {
      ret[i] = value.getUint8(i);
    }
    if (this.decoder == null) {
      return ret;
    }
    var iv = this.decoder.iv || [];
    if (ret.length > 16) {
      var offset = ret.length - 16;
      var block = this.decoder.decrypt(ret.slice(offset));
      for (var i = 0; i < 16; i++) {
        ret[i + offset] = block[i] ^ (~~iv[i]);
      }
    }
    this.decoder.decrypt(ret);
    for (var i = 0; i < 16; i++) {
      ret[i] ^= (~~iv[i]);
    }
    return ret;
  }

  encode(ret) {
    if (this.decoder == null) {
      return ret;
    }
    var iv = this.decoder.iv || [];
    for (var i = 0; i < 16; i++) {
      ret[i] ^= ~~iv[i];
    }
    this.decoder.encrypt(ret);
    if (ret.length > 16) {
      var offset = ret.length - 16;
      var block = ret.slice(offset);
      for (var i = 0; i < 16; i++) {
        block[i] ^= ~~iv[i];
      }
      this.decoder.encrypt(block);
      for (var i = 0; i < 16; i++) {
        ret[i + offset] = block[i];
      }
    }
    return ret;
  }

  sendRequest(req) {
    if (!this.chrctWrite) {
      console.log('[Moyu32Cube] sendRequest cannot find write chrct');
      return;
    }
    var encodedReq = this.encode(req.slice());
    // console.log('[Moyu32Cube] sendRequest', req, encodedReq);
    return this.chrctWrite.writeValue(new Uint8Array(encodedReq).buffer);
  }

  sendSimpleRequest(opcode) {
    var req = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    req[0] = opcode;
    return this.sendRequest(req);
  }

  requestCubeInfo() {
    return this.sendSimpleRequest(161);
  }

  requestCubeStatus() {
    return this.sendSimpleRequest(163);
  }

  requestCubePower() {
    return this.sendSimpleRequest(164);
  }

  override async initAsync() {
    // console.log('[Moyu32Cube]', 'start init device');
    let gatt = await this.device.gatt.connect();
    let service = await gatt.getPrimaryService(this.serviceUuid);
    // console.log('[Moyu32Cube]', 'got primary service', this.serviceUuid);
    let chrcts = await service.getCharacteristics();

    for (var i = 0; i < chrcts.length; i++) {
      var chrct = chrcts[i];
      // console.log('[Moyu32Cube]', 'init find chrct', chrct.uuid);
      if (matchUUID(chrct.uuid, this.chrctUuidRead)) {
        this.chrctCube = chrct;
      } else if (matchUUID(chrct.uuid, this.chrctUuidWrite)) {
        this.chrctWrite = chrct;
      }
    }

    this.initDecoder();

    this.chrctCube.addEventListener('characteristicvaluechanged', this.onCubeEvent.bind(this));
    await this.chrctCube.startNotifications();

    this.requestCubeInfo();
    this.requestCubeStatus();
    this.requestCubePower();
  }

  override onCubeEvent(event) {
    if (this.prevMoveCnt == -1) {
      this.requestCubeStatus();
    }
    var value = event.target.value;
    if (this.decoder == null) {
      return;
    }
    this.parseData(value);
  }

  parseData(value) {
    value = this.decode(value);
    // console.log(value);
    for (var i = 0; i < value.length; i++) {
      value[i] = (value[i] + 256).toString(2).slice(1);
    }
    value = value.join('');
    var msgType = parseInt(value.slice(0, 8), 2);
    if (msgType == 161) { // info
      // console.log('[Moyu32Cube]', 'received hardware info event', value);
    } else if (msgType == 163) { // state (facelets)
      var faces = ["F", "B", "U", "D", "L", "R"];

      for (var i = 0; i < 6; i++) {
        // console.log("Face ", faces[i]);
        for (var j = 0; j < 8; j++) {
          // console.log(value.substring(8 + 24 * i + j * 3, 8 + 24 * i + j * 3 + 3));
          // var value = decrypted.ExtractBits(8 + 24 * i + j * 3, 3);
          // Console.Write($"{faces[value]} ");
        }

        // Console.WriteLine("");
      }

      // console.log('[Moyu32Cube]', 'received state event', value);
      this.moveCnt = parseInt(value.slice(152, 160), 2);
      // console.log("163: " + this.moveCnt + " " + this.prevMoveCnt);
      this.prevMoveCnt = this.moveCnt;
      // console.log("163 " + this.moveCnt + " " + this.prevMoveCnt);
    } else if (msgType == 164) { // battery level
    } else if (msgType == 165) { // move
      this.moveCnt = parseInt(value.slice(88, 96), 2);
      // console.log("165: " + this.moveCnt + " " + this.prevMoveCnt);
      if (this.moveCnt == this.prevMoveCnt || this.prevMoveCnt == -1) {
        return;
      }
      this.prevMoves = [];
      var invalidMove = false;
      for (var i = 0; i < 5; i++) {
        var m = parseInt(value.slice(96 + i * 5, 101 + i * 5), 2);
        this.prevMoves[i] = "FBUDLR".charAt(m >> 1) + " '".charAt(m & 1);
        if (m >= 12) {
          this.prevMoves[i] = "U ";
          invalidMove = true;
        }
      }
      if (!invalidMove) {
        this.updateMoveTimes();
      }
    } else if (msgType == 171) { // gyro
    }
  }

  updateMoveTimes() {
    var moveDiff = (this.moveCnt - this.prevMoveCnt) & 0xff;
    // console.log("upd: " + this.moveCnt + " " + this.prevMoveCnt);
    moveDiff > 1 && console.log('[Moyu32Cube]', 'bluetooth event was lost, moveDiff = ' + moveDiff);
    this.prevMoveCnt = this.moveCnt;
    if (moveDiff > this.prevMoves.length) {
      moveDiff = this.prevMoves.length;
    }
    for (var i = moveDiff - 1; i >= 0; i--) {
      this.cubeService.makeMove(this.prevMoves[i]);
      // console.log('[Moyu32Cube] move', this.prevMoves[i]);
    }
  }
}

var aes128 = (function () {
  var sbox = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22];
  var sboxI = [];
  var shiftTabI = [0, 13, 10, 7, 4, 1, 14, 11, 8, 5, 2, 15, 12, 9, 6, 3];
  var xtime = [];
  function init() {
    if (xtime.length != 0) return;
    for (var i = 0; i < 256; i++) {
      sboxI[sbox[i]] = i;
    }
    for (var i = 0; i < 128; i++) {
      xtime[i] = i << 1;
      xtime[128 + i] = (i << 1) ^ 0x1b;
    }
  }
  function AES128(key) {
    init();
    var exKey = key.slice();
    var Rcon = 1;
    for (var i = 16; i < 176; i += 4) {
      var tmp = exKey.slice(i - 4, i);
      if (i % 16 == 0) {
        tmp = [sbox[tmp[1]] ^ Rcon, sbox[tmp[2]], sbox[tmp[3]], sbox[tmp[0]]];
        Rcon = xtime[Rcon];
      }
      for (var j = 0; j < 4; j++) {
        exKey[i + j] = exKey[i + j - 16] ^ tmp[j];
      }
    }
    this.key = exKey;
  };
  function addRoundKey(state, rkey) {
    for (var i = 0; i < 16; i++) {
      state[i] ^= rkey[i];
    }
  }
  function shiftSubAdd(state, rkey) {
    var state0 = state.slice();
    for (var i = 0; i < 16; i++) {
      state[i] = sboxI[state0[shiftTabI[i]]] ^ rkey[i];
    }
  }
  function shiftSubAddI(state, rkey) {
    var state0 = state.slice();
    for (var i = 0; i < 16; i++) {
      state[shiftTabI[i]] = sbox[state0[i] ^ rkey[i]];
    }
  }
  function mixColumns(state) {
    for (var i = 12; i >= 0; i -= 4) {
      var s0 = state[i + 0];
      var s1 = state[i + 1];
      var s2 = state[i + 2];
      var s3 = state[i + 3];
      var h = s0 ^ s1 ^ s2 ^ s3;
      state[i + 0] ^= h ^ xtime[s0 ^ s1];
      state[i + 1] ^= h ^ xtime[s1 ^ s2];
      state[i + 2] ^= h ^ xtime[s2 ^ s3];
      state[i + 3] ^= h ^ xtime[s3 ^ s0];
    }
  }
  function mixColumnsInv(state) {
    for (var i = 0; i < 16; i += 4) {
      var s0 = state[i + 0];
      var s1 = state[i + 1];
      var s2 = state[i + 2];
      var s3 = state[i + 3];
      var h = s0 ^ s1 ^ s2 ^ s3;
      var xh = xtime[h];
      var h1 = xtime[xtime[xh ^ s0 ^ s2]] ^ h;
      var h2 = xtime[xtime[xh ^ s1 ^ s3]] ^ h;
      state[i + 0] ^= h1 ^ xtime[s0 ^ s1];
      state[i + 1] ^= h2 ^ xtime[s1 ^ s2];
      state[i + 2] ^= h1 ^ xtime[s2 ^ s3];
      state[i + 3] ^= h2 ^ xtime[s3 ^ s0];
    }
  }
  AES128.prototype.decrypt = function (block) {
    var rkey = this.key.slice(160, 176);
    for (var i = 0; i < 16; i++) {
      block[i] ^= rkey[i];
    }
    for (var i = 144; i >= 16; i -= 16) {
      shiftSubAdd(block, this.key.slice(i, i + 16));
      for (var j = 0; j < 16; j += 4) {
        var s0 = block[j + 0];
        var s1 = block[j + 1];
        var s2 = block[j + 2];
        var s3 = block[j + 3];
        var h = s0 ^ s1 ^ s2 ^ s3;
        var xh = xtime[h];
        var h1 = xtime[xtime[xh ^ s0 ^ s2]] ^ h;
        var h2 = xtime[xtime[xh ^ s1 ^ s3]] ^ h;
        block[j + 0] ^= h1 ^ xtime[s0 ^ s1];
        block[j + 1] ^= h2 ^ xtime[s1 ^ s2];
        block[j + 2] ^= h1 ^ xtime[s2 ^ s3];
        block[j + 3] ^= h2 ^ xtime[s3 ^ s0];
      }
    }
    shiftSubAdd(block, this.key.slice(0, 16));
    return block;
  };
  AES128.prototype.encrypt = function (block) {
    shiftSubAddI(block, this.key.slice(0, 16));
    for (var i = 16; i < 160; i += 16) {
      mixColumns(block);
      shiftSubAddI(block, this.key.slice(i, i + 16));
    }
    addRoundKey(block, this.key.slice(160, 176));
    return block;
  }
  return AES128;
})();

export default TestNowy;
