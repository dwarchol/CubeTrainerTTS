import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ThreeStyleCase } from '../types';

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
    this.httpClient.get<Array<ThreeStyleCase>>('/api/ThreeStyleCase/corners').subscribe(cases => {
      console.log(cases);
      console.log(JSON.stringify(cases));
      this.cases = cases;
    });
  }
}
