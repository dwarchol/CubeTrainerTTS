
export const GAN_GEN2_SERVICE = "6e400001-b5a3-f393-e0a9-e50e24dc4179";
export const GAN_GEN2_COMMAND_CHARACTERISTIC = "28be4a4a-cd67-11e9-a32f-2a2ae2dbcce4";
export const GAN_GEN2_STATE_CHARACTERISTIC = "28be4cb6-cd67-11e9-a32f-2a2ae2dbcce4";

export const GAN_GEN3_SERVICE = "8653000a-43e6-47b7-9cb0-5fc21d4ae340";
export const GAN_GEN3_COMMAND_CHARACTERISTIC = "8653000c-43e6-47b7-9cb0-5fc21d4ae340";
export const GAN_GEN3_STATE_CHARACTERISTIC = "8653000b-43e6-47b7-9cb0-5fc21d4ae340";

export const GAN_GEN4_SERVICE = "00000010-0000-fff7-fff6-fff5fff4fff0";
export const GAN_GEN4_COMMAND_CHARACTERISTIC = "0000fff5-0000-1000-8000-00805f9b34fb";
export const GAN_GEN4_STATE_CHARACTERISTIC = "0000fff6-0000-1000-8000-00805f9b34fb";

export const MOYU_SERVICE = "0783b03e-7735-b5a0-1760-a305d2795cb0";
// export const MOYU_SERVICE = "02f00000-0000-0000-0000-00000000fe00";
export const MOYU_COMMAND_CHARACTERISTIC = "0783b03e-7735-b5a0-1760-a305d2795cb2";
export const MOYU_STATE_CHARACTERISTIC = "0783b03e-7735-b5a0-1760-a305d2795cb1";

/** List of Company Identifier Codes, fill with all values [0x0001, 0xFF01] possible for GAN cubes */
export const GAN_CIC_LIST = Array(256).fill(undefined).map((_v, i) => (i << 8) | 0x01);

/**  List of encryption keys */
export const GAN_ENCRYPTION_KEYS = [
    {   /** Key used by GAN Gen2, Gen3 and Gen4 cubes */
        key: [0x01, 0x02, 0x42, 0x28, 0x31, 0x91, 0x16, 0x07, 0x20, 0x05, 0x18, 0x54, 0x42, 0x11, 0x12, 0x53],
        iv: [0x11, 0x03, 0x32, 0x28, 0x21, 0x01, 0x76, 0x27, 0x20, 0x95, 0x78, 0x14, 0x32, 0x12, 0x02, 0x43]
    },
    {   /** Key used by MoYu AI 2023 */
        key: [0x05, 0x12, 0x02, 0x45, 0x02, 0x01, 0x29, 0x56, 0x12, 0x78, 0x12, 0x76, 0x81, 0x01, 0x08, 0x03],
        iv: [0x01, 0x44, 0x28, 0x06, 0x86, 0x21, 0x22, 0x28, 0x51, 0x05, 0x08, 0x31, 0x82, 0x02, 0x21, 0x06]
    },
    {
        /** Key used by Weilong v10 AI */
        key: [0x15, 0x77, 0x3a, 0x5c, 0x67, 0xe, 0x2d, 0x1f, 0x17, 0x67, 0x2a, 0x13, 0x9b, 0x67, 0x52, 0x57],
        iv: [0x11, 0x23, 0x26, 0x25, 0x86, 0x2a, 0x2c, 0x3b, 0x55, 0x6, 0x7f, 0x31, 0x7e, 0x67, 0x21, 0x57]
    }

];

