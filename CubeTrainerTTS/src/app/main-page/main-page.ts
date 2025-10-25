import { Component, inject } from '@angular/core';
import { CasesService } from '../cases-service';
import { CubeService, GanCubeState } from '../cube-service';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  private casesService = inject(CasesService);
  private cubeService = inject(CubeService);

  public nextCaseEl: ThreeStyleCase | null = null;
  protected nextCaseName = "";

  nextCase: ThreeStyleCase | null = null;

  ngOnInit() {
    this.casesService.getAllCases();
    this.cubeService.setFunction(this.getNextCase.bind(this));
  }
  connectCube() {
    this.cubeService.connectCube();
  }
  public getNextCase() {
    if (this.casesService.cases != null) {
      var caseNumber = Math.floor(Math.random() * this.casesService.cases.length);
      var nCase: ThreeStyleCase = this.casesService.cases[caseNumber];
      console.log(nCase);
      this.nextCaseEl = nCase;
      console.log(nCase.firstElement)
      this.nextCaseName = nCase.firstElement.name + " " + nCase.secondElement.name + " " + nCase.thirdElement.name;
      this.swapElements();
    }
  }

  swapElements() {
    console.log(":")
    if (this.cubeService.cubeState != null && this.nextCaseEl != null) {
      console.log("X")
      var newState: GanCubeState = JSON.parse(JSON.stringify(this.cubeService.cubeState));
      console.log(this.nextCaseEl)
      if (this.nextCaseEl?.caseType === ElementType.corner) {
        console.log("corner")
        var temp1 = newState.CO[this.nextCaseEl.thirdElement.position];
        newState.CO[this.nextCaseEl.thirdElement.position] = (3 - this.nextCaseEl.thirdElement.orientation + this.nextCaseEl.secondElement.orientation + newState.CO[this.nextCaseEl.secondElement.position]) % 3;
        newState.CO[this.nextCaseEl.secondElement.position] = (3 - this.nextCaseEl.secondElement.orientation + this.nextCaseEl.firstElement.orientation + newState.CO[this.nextCaseEl.firstElement.position]) % 3;
        newState.CO[this.nextCaseEl.firstElement.position] = (this.nextCaseEl.firstElement.orientation + this.nextCaseEl.thirdElement.orientation + temp1) % 3;
        var temp2 = newState.CP[this.nextCaseEl.thirdElement.position];
        newState.CP[this.nextCaseEl.thirdElement.position] = newState.CP[this.nextCaseEl.secondElement.position];
        newState.CP[this.nextCaseEl.secondElement.position] = newState.CP[this.nextCaseEl.firstElement.position];
        newState.CP[this.nextCaseEl.firstElement.position] = temp2;

      }
      else if (this.nextCaseEl?.caseType === ElementType.edge) {
        var temp1 = newState.EO[this.nextCaseEl.thirdElement.position];
        newState.EO[this.nextCaseEl.thirdElement.position] = (this.nextCaseEl.thirdElement.orientation + this.nextCaseEl.secondElement.orientation + newState.EO[this.nextCaseEl.secondElement.position]) % 2;
        newState.EO[this.nextCaseEl.secondElement.position] = (this.nextCaseEl.secondElement.orientation + this.nextCaseEl.firstElement.orientation + newState.EO[this.nextCaseEl.firstElement.position]) % 2;
        newState.EO[this.nextCaseEl.firstElement.position] = (this.nextCaseEl.firstElement.orientation + this.nextCaseEl.thirdElement.orientation + temp1) % 2;
        var temp2 = newState.EP[this.nextCaseEl.thirdElement.position];
        newState.EP[this.nextCaseEl.thirdElement.position] = newState.EP[this.nextCaseEl.secondElement.position];
        newState.EP[this.nextCaseEl.secondElement.position] = newState.EP[this.nextCaseEl.firstElement.position];
        newState.EP[this.nextCaseEl.firstElement.position] = temp2;
      }
      console.log(newState)
      this.cubeService.newState = newState;
    }
  }

}

export type ThreeStyleCase = {
  id: number,
  firstElement: Element,
  secondElement: Element,
  thirdElement: Element,
  personId: number,
  caseType: ElementType,
  isActive: boolean
}

type Element = {
  id: number,
  name: string,
  type: ElementType,
  position: number,
  orientation: number
}

enum ElementType {
  corner = 1,
  edge = 2
}
