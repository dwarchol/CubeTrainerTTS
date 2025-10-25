import { Injectable } from '@angular/core';
import { GanCubeConnection, MacAddressProvider, connectGanCube } from 'gan-web-bluetooth';

@Injectable({
  providedIn: 'root'
})
export class CubeService {
  public cubeState: GanCubeState | null = null;
  public newState: GanCubeState | null = null;
  connection: GanCubeConnection | null = null;

  private funcTest: () => void = () => { };


  async connectCube() {
    this.connection = await connectGanCube(this.customMacAddressProvider);
    console.log('Connected to cube:', this.connection);
    this.getState()
    this.connection.events$.subscribe(event => {
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
          this.funcTest();
        }
      }

    });
    console.log('Connected to cube:', this.connection);
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
    if (this.connection) {
      this.connection.sendCubeCommand({ type: "REQUEST_FACELETS" })
    }
  }
  resetCube() {
    if (this.connection) {
      this.connection.sendCubeCommand({ type: "REQUEST_RESET" })
    }
  }

  setFunction(fn: () => void) {
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