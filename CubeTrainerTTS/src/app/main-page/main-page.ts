import { Component, inject } from '@angular/core';
import { CasesService } from '../cases-service';
import { CubeService, GanCubeState } from '../cube-service';
import { ElementType, ThreeStyleCase } from '../../types';
import { MoyuTest } from '../../smart-cube/moyu-test';
import { SpeechService } from '../speech-service';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  private casesService = inject(CasesService);
  public cubeService = inject(CubeService);

  public nextCaseEl: ThreeStyleCase | null = null;
  protected nextCaseName = "";

  nextCase: ThreeStyleCase | null = null;
  constructor(private speechService: SpeechService) {

  };
  ngOnInit() {
    // this.cubeService.resetCube();
    this.casesService.getAllCases();
    this.cubeService.setFunction(this.getNextCase.bind(this));
  }
  connectCube(model: string) {
    this.cubeService.connectCube(model);
  }
  resetCube() {
    this.cubeService.resetCube();
  }
  public getNextCase(done: boolean) {
    console.log("Getting next case");
    if (this.casesService.cases != null) {
      if (done) {
        this.casesService.cases = this.casesService.cases.filter(el => el.id !== this.nextCaseEl?.id);
      }
      if (this.casesService.cases == null) {
        console.log("No more cases available");
        return;
      }
      var caseNumber = Math.floor(Math.random() * this.casesService.cases.length);
      var nCase: ThreeStyleCase = this.casesService.cases[caseNumber];
      this.nextCaseEl = nCase;
      this.nextCaseName = nCase.firstElement.letterMarks[0].mark + " " + nCase.secondElement.letterMarks[0].mark + " " + nCase.thirdElement.letterMarks[0].mark;
      this.swapElements();
      this.speechService.playText(this.nextCaseEl.letterPairs[0].image);
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
  connectMoyuCube() {
    var x = new MoyuTest();
    x.connectMoyuCube();
  }
}
