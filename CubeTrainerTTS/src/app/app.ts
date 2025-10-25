import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CasesService } from './cases-service';
import { MainPage } from "./main-page/main-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CubeTrainerTTS');
}
