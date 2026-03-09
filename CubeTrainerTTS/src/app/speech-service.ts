import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  uttr: SpeechSynthesisUtterance;
  constructor() {
    this.uttr = new SpeechSynthesisUtterance()
    this.uttr.lang = 'pl-PL';

  }

  playText(text: String) {
    this.uttr.text = text.toString();
    speechSynthesis.speak(this.uttr);
  }
}
