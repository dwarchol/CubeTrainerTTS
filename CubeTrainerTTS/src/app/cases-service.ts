import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ThreeStyleCase } from './main-page/main-page';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  private httpClient = inject(HttpClient);
  public cases: Array<ThreeStyleCase> | null = null;
  ngOnInit() {
    this.getAllCases();
  }

  getAllCases() {
    this.httpClient.get<Array<ThreeStyleCase>>('/api/ThreeStyleCase').subscribe(cases => {
      console.log(cases);
      this.cases = cases;
    });
  }
}
