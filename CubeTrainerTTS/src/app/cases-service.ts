import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ThreeStyleCase } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  private httpClient = inject(HttpClient);
  public cases = null;
  ngOnInit() {
    // this.getAllCases();
    this.getCasesNoApi();
  }

  getAllCases() {
    this.httpClient.get<Array<ThreeStyleCase>>('/api/ThreeStyleCase/corners').subscribe(cases => {
      console.log(cases);
      console.log(JSON.stringify(cases));
      this.cases = cases;
    });
  }
  getCasesNoApi() {
    this.cases = allCases;
  }
}

var allCases = [
  {
    "id": 1,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 462,
        "image": "baca",
        "caseId": 1,
        "personId": 1
      },
      {
        "id": 1,
        "image": "image",
        "caseId": 1,
        "personId": 1
      }
    ]
  },
  {
    "id": 2,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 2,
        "image": "a",
        "caseId": 2,
        "personId": 1
      },
      {
        "id": 461,
        "image": "bańki",
        "caseId": 2,
        "personId": 1
      }
    ]
  },
  {
    "id": 3,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 475,
        "image": "basen",
        "caseId": 3,
        "personId": 1
      }
    ]
  },
  {
    "id": 4,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 474,
        "image": "broń",
        "caseId": 4,
        "personId": 1
      }
    ]
  },
  {
    "id": 5,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 476,
        "image": "buty",
        "caseId": 5,
        "personId": 1
      }
    ]
  },
  {
    "id": 6,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 477,
        "image": "burak",
        "caseId": 6,
        "personId": 1
      }
    ]
  },
  {
    "id": 7,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 463,
        "image": "beczka",
        "caseId": 7,
        "personId": 1
      }
    ]
  },
  {
    "id": 8,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 467,
        "image": "bidon",
        "caseId": 8,
        "personId": 1
      }
    ]
  },
  {
    "id": 9,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 468,
        "image": "boja",
        "caseId": 9,
        "personId": 1
      }
    ]
  },
  {
    "id": 10,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 464,
        "image": "opaska do blinda",
        "caseId": 10,
        "personId": 1
      }
    ]
  },
  {
    "id": 11,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 473,
        "image": "dystrybutor",
        "caseId": 11,
        "personId": 1
      }
    ]
  },
  {
    "id": 12,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 471,
        "image": "bumerang",
        "caseId": 12,
        "personId": 1
      }
    ]
  },
  {
    "id": 13,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 466,
        "image": "blacha",
        "caseId": 13,
        "personId": 1
      }
    ]
  },
  {
    "id": 14,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 470,
        "image": "balon",
        "caseId": 14,
        "personId": 1
      }
    ]
  },
  {
    "id": 15,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 465,
        "image": "bigos",
        "caseId": 15,
        "personId": 1
      }
    ]
  },
  {
    "id": 16,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 478,
        "image": "beza",
        "caseId": 16,
        "personId": 1
      }
    ]
  },
  {
    "id": 17,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 472,
        "image": "banan",
        "caseId": 17,
        "personId": 1
      }
    ]
  },
  {
    "id": 18,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 2,
    "secondElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 469,
        "image": "bekon",
        "caseId": 18,
        "personId": 1
      }
    ]
  },
  {
    "id": 19,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 480,
        "image": "cebula",
        "caseId": 19,
        "personId": 1
      }
    ]
  },
  {
    "id": 20,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 479,
        "image": "catering",
        "caseId": 20,
        "personId": 1
      }
    ]
  },
  {
    "id": 21,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 493,
        "image": "cysterna",
        "caseId": 21,
        "personId": 1
      }
    ]
  },
  {
    "id": 22,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 492,
        "image": "creeper",
        "caseId": 22,
        "personId": 1
      }
    ]
  },
  {
    "id": 23,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 494,
        "image": "cytryna",
        "caseId": 23,
        "personId": 1
      }
    ]
  },
  {
    "id": 24,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 495,
        "image": "cukier",
        "caseId": 24,
        "personId": 1
      }
    ]
  },
  {
    "id": 25,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 490,
        "image": "cola",
        "caseId": 25,
        "personId": 1
      }
    ]
  },
  {
    "id": 26,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 484,
        "image": "ciasto",
        "caseId": 26,
        "personId": 1
      }
    ]
  },
  {
    "id": 27,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 485,
        "image": "czajnik",
        "caseId": 27,
        "personId": 1
      }
    ]
  },
  {
    "id": 28,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 482,
        "image": "cif",
        "caseId": 28,
        "personId": 1
      }
    ]
  },
  {
    "id": 29,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 491,
        "image": "cepil",
        "caseId": 29,
        "personId": 1
      }
    ]
  },
  {
    "id": 30,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 488,
        "image": "ćma",
        "caseId": 30,
        "personId": 1
      }
    ]
  },
  {
    "id": 31,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 481,
        "image": "płyta CD",
        "caseId": 31,
        "personId": 1
      }
    ]
  },
  {
    "id": 32,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 487,
        "image": "cylinder",
        "caseId": 32,
        "personId": 1
      }
    ]
  },
  {
    "id": 33,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 483,
        "image": "cegła",
        "caseId": 33,
        "personId": 1
      }
    ]
  },
  {
    "id": 34,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 496,
        "image": "czekolada",
        "caseId": 34,
        "personId": 1
      }
    ]
  },
  {
    "id": 35,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 489,
        "image": "cynamon",
        "caseId": 35,
        "personId": 1
      }
    ]
  },
  {
    "id": 36,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 3,
    "secondElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 486,
        "image": "cukinia",
        "caseId": 36,
        "personId": 1
      }
    ]
  },
  {
    "id": 37,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 443,
        "image": "arbuz",
        "caseId": 37,
        "personId": 1
      }
    ]
  },
  {
    "id": 38,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 444,
        "image": "klimatyzator",
        "caseId": 38,
        "personId": 1
      }
    ]
  },
  {
    "id": 39,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 457,
        "image": "astronauta",
        "caseId": 39,
        "personId": 1
      }
    ]
  },
  {
    "id": 40,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 456,
        "image": "armata",
        "caseId": 40,
        "personId": 1
      }
    ]
  },
  {
    "id": 41,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 458,
        "image": "bomba atomowa",
        "caseId": 41,
        "personId": 1
      }
    ]
  },
  {
    "id": 42,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 459,
        "image": "auto",
        "caseId": 42,
        "personId": 1
      }
    ]
  },
  {
    "id": 43,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 454,
        "image": "aloes",
        "caseId": 43,
        "personId": 1
      }
    ]
  },
  {
    "id": 44,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 446,
        "image": "aerozol",
        "caseId": 44,
        "personId": 1
      }
    ]
  },
  {
    "id": 45,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 450,
        "image": "ajthepolishamerican",
        "caseId": 45,
        "personId": 1
      }
    ]
  },
  {
    "id": 46,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 447,
        "image": "afro",
        "caseId": 46,
        "personId": 1
      }
    ]
  },
  {
    "id": 47,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 455,
        "image": "aparat",
        "caseId": 47,
        "personId": 1
      }
    ]
  },
  {
    "id": 48,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 452,
        "image": "amelia",
        "caseId": 48,
        "personId": 1
      }
    ]
  },
  {
    "id": 49,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 445,
        "image": "adam",
        "caseId": 49,
        "personId": 1
      }
    ]
  },
  {
    "id": 50,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 449,
        "image": "marynarz",
        "caseId": 50,
        "personId": 1
      }
    ]
  },
  {
    "id": 51,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 448,
        "image": "agrafka",
        "caseId": 51,
        "personId": 1
      }
    ]
  },
  {
    "id": 52,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 460,
        "image": "areczek",
        "caseId": 52,
        "personId": 1
      }
    ]
  },
  {
    "id": 53,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 453,
        "image": "ania",
        "caseId": 53,
        "personId": 1
      }
    ]
  },
  {
    "id": 54,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 4,
    "secondElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 451,
        "image": "akordeon",
        "caseId": 54,
        "personId": 1
      }
    ]
  },
  {
    "id": 55,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 750,
        "image": "seba",
        "caseId": 55,
        "personId": 1
      }
    ]
  },
  {
    "id": 56,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 751,
        "image": "serce",
        "caseId": 56,
        "personId": 1
      }
    ]
  },
  {
    "id": 57,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 749,
        "image": "sałata",
        "caseId": 57,
        "personId": 1
      }
    ]
  },
  {
    "id": 58,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 763,
        "image": "syrena",
        "caseId": 58,
        "personId": 1
      }
    ]
  },
  {
    "id": 59,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 764,
        "image": "stolik",
        "caseId": 59,
        "personId": 1
      }
    ]
  },
  {
    "id": 60,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 765,
        "image": "sukienka",
        "caseId": 60,
        "personId": 1
      }
    ]
  },
  {
    "id": 61,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 761,
        "image": "słoik",
        "caseId": 61,
        "personId": 1
      }
    ]
  },
  {
    "id": 62,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 753,
        "image": "ser",
        "caseId": 62,
        "personId": 1
      }
    ]
  },
  {
    "id": 63,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 756,
        "image": "siano",
        "caseId": 63,
        "personId": 1
      }
    ]
  },
  {
    "id": 64,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 754,
        "image": "smerf",
        "caseId": 64,
        "personId": 1
      }
    ]
  },
  {
    "id": 65,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 762,
        "image": "spodnie",
        "caseId": 65,
        "personId": 1
      }
    ]
  },
  {
    "id": 66,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 759,
        "image": "smok",
        "caseId": 66,
        "personId": 1
      }
    ]
  },
  {
    "id": 67,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 752,
        "image": "sędzia",
        "caseId": 67,
        "personId": 1
      }
    ]
  },
  {
    "id": 68,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 755,
        "image": "shab",
        "caseId": 68,
        "personId": 1
      }
    ]
  },
  {
    "id": 69,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 758,
        "image": "slime",
        "caseId": 69,
        "personId": 1
      }
    ]
  },
  {
    "id": 70,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 766,
        "image": "szczoteczka",
        "caseId": 70,
        "personId": 1
      }
    ]
  },
  {
    "id": 71,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 760,
        "image": "sanki",
        "caseId": 71,
        "personId": 1
      }
    ]
  },
  {
    "id": 72,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 5,
    "secondElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 757,
        "image": "skakanka",
        "caseId": 72,
        "personId": 1
      }
    ]
  },
  {
    "id": 73,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 732,
        "image": "ryba",
        "caseId": 73,
        "personId": 1
      }
    ]
  },
  {
    "id": 74,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 733,
        "image": "rycerz",
        "caseId": 74,
        "personId": 1
      }
    ]
  },
  {
    "id": 75,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 731,
        "image": "radio",
        "caseId": 75,
        "personId": 1
      }
    ]
  },
  {
    "id": 76,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 746,
        "image": "rosół",
        "caseId": 76,
        "personId": 1
      }
    ]
  },
  {
    "id": 77,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 747,
        "image": "szczur/rattata",
        "caseId": 77,
        "personId": 1
      }
    ]
  },
  {
    "id": 78,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 748,
        "image": "róża",
        "caseId": 78,
        "personId": 1
      }
    ]
  },
  {
    "id": 79,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 744,
        "image": "rodzynki",
        "caseId": 79,
        "personId": 1
      }
    ]
  },
  {
    "id": 80,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 735,
        "image": "rekin",
        "caseId": 80,
        "personId": 1
      }
    ]
  },
  {
    "id": 81,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 738,
        "image": "rico",
        "caseId": 81,
        "personId": 1
      }
    ]
  },
  {
    "id": 82,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 739,
        "image": "rajstopy",
        "caseId": 82,
        "personId": 1
      }
    ]
  },
  {
    "id": 83,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 745,
        "image": "ropucha",
        "caseId": 83,
        "personId": 1
      }
    ]
  },
  {
    "id": 84,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 742,
        "image": "ramka",
        "caseId": 84,
        "personId": 1
      }
    ]
  },
  {
    "id": 85,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 734,
        "image": "rydwan",
        "caseId": 85,
        "personId": 1
      }
    ]
  },
  {
    "id": 86,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 737,
        "image": "rachunek/paragon",
        "caseId": 86,
        "personId": 1
      }
    ]
  },
  {
    "id": 87,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 741,
        "image": "rolnik",
        "caseId": 87,
        "personId": 1
      }
    ]
  },
  {
    "id": 88,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 736,
        "image": "rogal",
        "caseId": 88,
        "personId": 1
      }
    ]
  },
  {
    "id": 89,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 743,
        "image": "renifer",
        "caseId": 89,
        "personId": 1
      }
    ]
  },
  {
    "id": 90,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 6,
    "secondElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 740,
        "image": "rakieta",
        "caseId": 90,
        "personId": 1
      }
    ]
  },
  {
    "id": 91,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 768,
        "image": "tablica",
        "caseId": 91,
        "personId": 1
      }
    ]
  },
  {
    "id": 92,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 769,
        "image": "taca",
        "caseId": 92,
        "personId": 1
      }
    ]
  },
  {
    "id": 93,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 767,
        "image": "tarcza",
        "caseId": 93,
        "personId": 1
      }
    ]
  },
  {
    "id": 94,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 782,
        "image": "tasak",
        "caseId": 94,
        "personId": 1
      }
    ]
  },
  {
    "id": 95,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 781,
        "image": "tarka",
        "caseId": 95,
        "personId": 1
      }
    ]
  },
  {
    "id": 96,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 783,
        "image": "tukan",
        "caseId": 96,
        "personId": 1
      }
    ]
  },
  {
    "id": 97,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 780,
        "image": "tort",
        "caseId": 97,
        "personId": 1
      }
    ]
  },
  {
    "id": 98,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 771,
        "image": "tetris",
        "caseId": 98,
        "personId": 1
      }
    ]
  },
  {
    "id": 99,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 775,
        "image": "tik taki",
        "caseId": 99,
        "personId": 1
      }
    ]
  },
  {
    "id": 100,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 776,
        "image": "tuja",
        "caseId": 100,
        "personId": 1
      }
    ]
  },
  {
    "id": 101,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 772,
        "image": "patelnia teflonowa",
        "caseId": 101,
        "personId": 1
      }
    ]
  },
  {
    "id": 102,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 779,
        "image": "tamburyn",
        "caseId": 102,
        "personId": 1
      }
    ]
  },
  {
    "id": 103,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 770,
        "image": "tom daily",
        "caseId": 103,
        "personId": 1
      }
    ]
  },
  {
    "id": 104,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 774,
        "image": "taczka",
        "caseId": 104,
        "personId": 1
      }
    ]
  },
  {
    "id": 105,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 778,
        "image": "talerz",
        "caseId": 105,
        "personId": 1
      }
    ]
  },
  {
    "id": 106,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 773,
        "image": "tygrys",
        "caseId": 106,
        "personId": 1
      }
    ]
  },
  {
    "id": 107,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 784,
        "image": "tarzan",
        "caseId": 107,
        "personId": 1
      }
    ]
  },
  {
    "id": 108,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 7,
    "secondElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 777,
        "image": "traktor",
        "caseId": 108,
        "personId": 1
      }
    ]
  },
  {
    "id": 109,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 786,
        "image": "ubot/łódź podwodna",
        "caseId": 109,
        "personId": 1
      }
    ]
  },
  {
    "id": 110,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 787,
        "image": "Łódź",
        "caseId": 110,
        "personId": 1
      }
    ]
  },
  {
    "id": 111,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 785,
        "image": "Ula",
        "caseId": 111,
        "personId": 1
      }
    ]
  },
  {
    "id": 112,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 800,
        "image": "usta",
        "caseId": 112,
        "personId": 1
      }
    ]
  },
  {
    "id": 113,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 799,
        "image": "urna",
        "caseId": 113,
        "personId": 1
      }
    ]
  },
  {
    "id": 114,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 801,
        "image": "lutownica",
        "caseId": 114,
        "personId": 1
      }
    ]
  },
  {
    "id": 115,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 797,
        "image": "kostka 3x3",
        "caseId": 115,
        "personId": 1
      }
    ]
  },
  {
    "id": 116,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 789,
        "image": "unia europejska *",
        "caseId": 116,
        "personId": 1
      }
    ]
  },
  {
    "id": 117,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 793,
        "image": "sushi *",
        "caseId": 117,
        "personId": 1
      }
    ]
  },
  {
    "id": 118,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 794,
        "image": "rektor/uj",
        "caseId": 118,
        "personId": 1
      }
    ]
  },
  {
    "id": 119,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 790,
        "image": "ufo",
        "caseId": 119,
        "personId": 1
      }
    ]
  },
  {
    "id": 120,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 798,
        "image": "upiór/duch",
        "caseId": 120,
        "personId": 1
      }
    ]
  },
  {
    "id": 121,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 788,
        "image": "udka (z kurczaka)",
        "caseId": 121,
        "personId": 1
      }
    ]
  },
  {
    "id": 122,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 792,
        "image": "ucho",
        "caseId": 122,
        "personId": 1
      }
    ]
  },
  {
    "id": 123,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 795,
        "image": "ul",
        "caseId": 123,
        "personId": 1
      }
    ]
  },
  {
    "id": 124,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 791,
        "image": "(ugryzienie)",
        "caseId": 124,
        "personId": 1
      }
    ]
  },
  {
    "id": 125,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 802,
        "image": "uzi",
        "caseId": 125,
        "personId": 1
      }
    ]
  },
  {
    "id": 126,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 8,
    "secondElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 796,
        "image": "karty uno",
        "caseId": 126,
        "personId": 1
      }
    ]
  },
  {
    "id": 127,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 696,
        "image": "ocet",
        "caseId": 127,
        "personId": 1
      }
    ]
  },
  {
    "id": 128,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 695,
        "image": "ola",
        "caseId": 128,
        "personId": 1
      }
    ]
  },
  {
    "id": 129,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 709,
        "image": "osa",
        "caseId": 129,
        "personId": 1
      }
    ]
  },
  {
    "id": 130,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 708,
        "image": "ornat",
        "caseId": 130,
        "personId": 1
      }
    ]
  },
  {
    "id": 131,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 710,
        "image": "otwieracz",
        "caseId": 131,
        "personId": 1
      }
    ]
  },
  {
    "id": 132,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 711,
        "image": "ołówek",
        "caseId": 132,
        "personId": 1
      }
    ]
  },
  {
    "id": 133,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 697,
        "image": "oreo",
        "caseId": 133,
        "personId": 1
      }
    ]
  },
  {
    "id": 134,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 701,
        "image": "oliwa",
        "caseId": 134,
        "personId": 1
      }
    ]
  },
  {
    "id": 135,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 702,
        "image": "ojrzyński",
        "caseId": 135,
        "personId": 1
      }
    ]
  },
  {
    "id": 136,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 698,
        "image": "kilof",
        "caseId": 136,
        "personId": 1
      }
    ]
  },
  {
    "id": 137,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 707,
        "image": "opoka radek",
        "caseId": 137,
        "personId": 1
      }
    ]
  },
  {
    "id": 138,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 705,
        "image": "omar",
        "caseId": 138,
        "personId": 1
      }
    ]
  },
  {
    "id": 139,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 700,
        "image": "ochraniacze",
        "caseId": 139,
        "personId": 1
      }
    ]
  },
  {
    "id": 140,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 704,
        "image": "czerwone korale (Olga drahonowska)",
        "caseId": 140,
        "personId": 1
      }
    ]
  },
  {
    "id": 141,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 699,
        "image": "ognisko",
        "caseId": 141,
        "personId": 1
      }
    ]
  },
  {
    "id": 142,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 712,
        "image": "bombka/ozdoba",
        "caseId": 142,
        "personId": 1
      }
    ]
  },
  {
    "id": 143,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 706,
        "image": "onix",
        "caseId": 143,
        "personId": 1
      }
    ]
  },
  {
    "id": 144,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 10,
    "secondElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 703,
        "image": "okno",
        "caseId": 144,
        "personId": 1
      }
    ]
  },
  {
    "id": 145,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 516,
        "image": "eb/doma",
        "caseId": 145,
        "personId": 1
      }
    ]
  },
  {
    "id": 146,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 515,
        "image": "piłkarz/fifa/ea",
        "caseId": 146,
        "personId": 1
      }
    ]
  },
  {
    "id": 147,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 529,
        "image": "eskimos",
        "caseId": 147,
        "personId": 1
      }
    ]
  },
  {
    "id": 148,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 528,
        "image": "ernest",
        "caseId": 148,
        "personId": 1
      }
    ]
  },
  {
    "id": 149,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 530,
        "image": "kosmita",
        "caseId": 149,
        "personId": 1
      }
    ]
  },
  {
    "id": 150,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 531,
        "image": "euro/banknot",
        "caseId": 150,
        "personId": 1
      }
    ]
  },
  {
    "id": 151,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 526,
        "image": "szachy",
        "caseId": 151,
        "personId": 1
      }
    ]
  },
  {
    "id": 152,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 520,
        "image": "einstein",
        "caseId": 152,
        "personId": 1
      }
    ]
  },
  {
    "id": 153,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 521,
        "image": "klej",
        "caseId": 153,
        "personId": 1
      }
    ]
  },
  {
    "id": 154,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 518,
        "image": "elf",
        "caseId": 154,
        "personId": 1
      }
    ]
  },
  {
    "id": 155,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 527,
        "image": "square-1",
        "caseId": 155,
        "personId": 1
      }
    ]
  },
  {
    "id": 156,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 524,
        "image": "struś emu",
        "caseId": 156,
        "personId": 1
      }
    ]
  },
  {
    "id": 157,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 517,
        "image": "ledy",
        "caseId": 157,
        "personId": 1
      }
    ]
  },
  {
    "id": 158,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 523,
        "image": "elza",
        "caseId": 158,
        "personId": 1
      }
    ]
  },
  {
    "id": 159,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 519,
        "image": "eggins",
        "caseId": 159,
        "personId": 1
      }
    ]
  },
  {
    "id": 160,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 532,
        "image": "jeż",
        "caseId": 160,
        "personId": 1
      }
    ]
  },
  {
    "id": 161,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 525,
        "image": "encyklopedia/książka",
        "caseId": 161,
        "personId": 1
      }
    ]
  },
  {
    "id": 162,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 11,
    "secondElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 522,
        "image": "ekran",
        "caseId": 162,
        "personId": 1
      }
    ]
  },
  {
    "id": 163,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 587,
        "image": "ibisz",
        "caseId": 163,
        "personId": 1
      }
    ]
  },
  {
    "id": 164,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 588,
        "image": "kostka lodu",
        "caseId": 164,
        "personId": 1
      }
    ]
  },
  {
    "id": 165,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 601,
        "image": "angelika iskra",
        "caseId": 165,
        "personId": 1
      }
    ]
  },
  {
    "id": 166,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 600,
        "image": "ironman",
        "caseId": 166,
        "personId": 1
      }
    ]
  },
  {
    "id": 167,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 602,
        "image": "informatyk",
        "caseId": 167,
        "personId": 1
      }
    ]
  },
  {
    "id": 168,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 603,
        "image": "miód",
        "caseId": 168,
        "personId": 1
      }
    ]
  },
  {
    "id": 169,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 598,
        "image": "karetka",
        "caseId": 169,
        "personId": 1
      }
    ]
  },
  {
    "id": 170,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 590,
        "image": "bierki",
        "caseId": 170,
        "personId": 1
      }
    ]
  },
  {
    "id": 171,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 594,
        "image": "kij",
        "caseId": 171,
        "personId": 1
      }
    ]
  },
  {
    "id": 172,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 591,
        "image": "iphone",
        "caseId": 172,
        "personId": 1
      }
    ]
  },
  {
    "id": 173,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 599,
        "image": "piwo",
        "caseId": 173,
        "personId": 1
      }
    ]
  },
  {
    "id": 174,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 596,
        "image": "imadło",
        "caseId": 174,
        "personId": 1
      }
    ]
  },
  {
    "id": 175,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 589,
        "image": "identyfikator",
        "caseId": 175,
        "personId": 1
      }
    ]
  },
  {
    "id": 176,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 593,
        "image": "inhalator",
        "caseId": 176,
        "personId": 1
      }
    ]
  },
  {
    "id": 177,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 592,
        "image": "igor",
        "caseId": 177,
        "personId": 1
      }
    ]
  },
  {
    "id": 178,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 604,
        "image": "iza",
        "caseId": 178,
        "personId": 1
      }
    ]
  },
  {
    "id": 179,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 597,
        "image": "indyk",
        "caseId": 179,
        "personId": 1
      }
    ]
  },
  {
    "id": 180,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 12,
    "secondElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 595,
        "image": "ikra",
        "caseId": 180,
        "personId": 1
      }
    ]
  },
  {
    "id": 181,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 606,
        "image": "jabłko",
        "caseId": 181,
        "personId": 1
      }
    ]
  },
  {
    "id": 182,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 607,
        "image": "jacek",
        "caseId": 182,
        "personId": 1
      }
    ]
  },
  {
    "id": 183,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 605,
        "image": "jagoda",
        "caseId": 183,
        "personId": 1
      }
    ]
  },
  {
    "id": 184,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 619,
        "image": "jurek",
        "caseId": 184,
        "personId": 1
      }
    ]
  },
  {
    "id": 185,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 620,
        "image": "samolot / jumbo jet",
        "caseId": 185,
        "personId": 1
      }
    ]
  },
  {
    "id": 186,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 621,
        "image": "juzek",
        "caseId": 186,
        "personId": 1
      }
    ]
  },
  {
    "id": 187,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 617,
        "image": "jojo",
        "caseId": 187,
        "personId": 1
      }
    ]
  },
  {
    "id": 188,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 609,
        "image": "jenga",
        "caseId": 188,
        "personId": 1
      }
    ]
  },
  {
    "id": 189,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 612,
        "image": "yeti",
        "caseId": 189,
        "personId": 1
      }
    ]
  },
  {
    "id": 190,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 610,
        "image": "sejf",
        "caseId": 190,
        "personId": 1
      }
    ]
  },
  {
    "id": 191,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 618,
        "image": "japonki",
        "caseId": 191,
        "personId": 1
      }
    ]
  },
  {
    "id": 192,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 615,
        "image": "jamnik",
        "caseId": 192,
        "personId": 1
      }
    ]
  },
  {
    "id": 193,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 608,
        "image": "wąż",
        "caseId": 193,
        "personId": 1
      }
    ]
  },
  {
    "id": 194,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 611,
        "image": "księżyc/jechowa?",
        "caseId": 194,
        "personId": 1
      }
    ]
  },
  {
    "id": 195,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 614,
        "image": "julek",
        "caseId": 195,
        "personId": 1
      }
    ]
  },
  {
    "id": 196,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 622,
        "image": "jezus",
        "caseId": 196,
        "personId": 1
      }
    ]
  },
  {
    "id": 197,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 616,
        "image": "jan",
        "caseId": 197,
        "personId": 1
      }
    ]
  },
  {
    "id": 198,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 13,
    "secondElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 613,
        "image": "joker",
        "caseId": 198,
        "personId": 1
      }
    ]
  },
  {
    "id": 199,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 534,
        "image": "zębatka/fabryka",
        "caseId": 199,
        "personId": 1
      }
    ]
  },
  {
    "id": 200,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 535,
        "image": "filc",
        "caseId": 200,
        "personId": 1
      }
    ]
  },
  {
    "id": 201,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 533,
        "image": "farba",
        "caseId": 201,
        "personId": 1
      }
    ]
  },
  {
    "id": 202,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 548,
        "image": "fasola",
        "caseId": 202,
        "personId": 1
      }
    ]
  },
  {
    "id": 203,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 549,
        "image": "fotografia",
        "caseId": 203,
        "personId": 1
      }
    ]
  },
  {
    "id": 204,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 550,
        "image": "futro",
        "caseId": 204,
        "personId": 1
      }
    ]
  },
  {
    "id": 205,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 546,
        "image": "folia",
        "caseId": 205,
        "personId": 1
      }
    ]
  },
  {
    "id": 206,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 537,
        "image": "felix",
        "caseId": 206,
        "personId": 1
      }
    ]
  },
  {
    "id": 207,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 540,
        "image": "fineasz",
        "caseId": 207,
        "personId": 1
      }
    ]
  },
  {
    "id": 208,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 541,
        "image": "fajki",
        "caseId": 208,
        "personId": 1
      }
    ]
  },
  {
    "id": 209,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 547,
        "image": "fortepian",
        "caseId": 209,
        "personId": 1
      }
    ]
  },
  {
    "id": 210,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 544,
        "image": "rękawice bokserskie",
        "caseId": 210,
        "personId": 1
      }
    ]
  },
  {
    "id": 211,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 536,
        "image": "paczka/fedex",
        "caseId": 211,
        "personId": 1
      }
    ]
  },
  {
    "id": 212,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 539,
        "image": "fartuch",
        "caseId": 212,
        "personId": 1
      }
    ]
  },
  {
    "id": 213,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 543,
        "image": "flaga",
        "caseId": 213,
        "personId": 1
      }
    ]
  },
  {
    "id": 214,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 538,
        "image": "fagata",
        "caseId": 214,
        "personId": 1
      }
    ]
  },
  {
    "id": 215,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 545,
        "image": "fiona",
        "caseId": 215,
        "personId": 1
      }
    ]
  },
  {
    "id": 216,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 14,
    "secondElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 542,
        "image": "foka",
        "caseId": 216,
        "personId": 1
      }
    ]
  },
  {
    "id": 217,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 714,
        "image": "Magda Pabisz",
        "caseId": 217,
        "personId": 1
      }
    ]
  },
  {
    "id": 218,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 715,
        "image": "pociąG",
        "caseId": 218,
        "personId": 1
      }
    ]
  },
  {
    "id": 219,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 713,
        "image": "pasta do zębów",
        "caseId": 219,
        "personId": 1
      }
    ]
  },
  {
    "id": 220,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 728,
        "image": "pasek",
        "caseId": 220,
        "personId": 1
      }
    ]
  },
  {
    "id": 221,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 727,
        "image": "pralka",
        "caseId": 221,
        "personId": 1
      }
    ]
  },
  {
    "id": 222,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 729,
        "image": "puszka",
        "caseId": 222,
        "personId": 1
      }
    ]
  },
  {
    "id": 223,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 726,
        "image": "pomarańcz",
        "caseId": 223,
        "personId": 1
      }
    ]
  },
  {
    "id": 224,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 717,
        "image": "pepe pan dziobak",
        "caseId": 224,
        "personId": 1
      }
    ]
  },
  {
    "id": 225,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 721,
        "image": "pinokio",
        "caseId": 225,
        "personId": 1
      }
    ]
  },
  {
    "id": 226,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 722,
        "image": "pająk",
        "caseId": 226,
        "personId": 1
      }
    ]
  },
  {
    "id": 227,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 718,
        "image": "pufa",
        "caseId": 227,
        "personId": 1
      }
    ]
  },
  {
    "id": 228,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 725,
        "image": "pomidor",
        "caseId": 228,
        "personId": 1
      }
    ]
  },
  {
    "id": 229,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 716,
        "image": "pad",
        "caseId": 229,
        "personId": 1
      }
    ]
  },
  {
    "id": 230,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 720,
        "image": "puchar",
        "caseId": 230,
        "personId": 1
      }
    ]
  },
  {
    "id": 231,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 724,
        "image": "pilot do telewizora",
        "caseId": 231,
        "personId": 1
      }
    ]
  },
  {
    "id": 232,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 719,
        "image": "pierogi",
        "caseId": 232,
        "personId": 1
      }
    ]
  },
  {
    "id": 233,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 730,
        "image": "pizza",
        "caseId": 233,
        "personId": 1
      }
    ]
  },
  {
    "id": 234,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 15,
    "secondElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 723,
        "image": "pikacho",
        "caseId": 234,
        "personId": 1
      }
    ]
  },
  {
    "id": 235,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 660,
        "image": "mamba",
        "caseId": 235,
        "personId": 1
      }
    ]
  },
  {
    "id": 236,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 661,
        "image": "macki",
        "caseId": 236,
        "personId": 1
      }
    ]
  },
  {
    "id": 237,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 659,
        "image": "makaron",
        "caseId": 237,
        "personId": 1
      }
    ]
  },
  {
    "id": 238,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 674,
        "image": "masło",
        "caseId": 238,
        "personId": 1
      }
    ]
  },
  {
    "id": 239,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 673,
        "image": "mrówki",
        "caseId": 239,
        "personId": 1
      }
    ]
  },
  {
    "id": 240,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 675,
        "image": "karimata",
        "caseId": 240,
        "personId": 1
      }
    ]
  },
  {
    "id": 241,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 671,
        "image": "moneta",
        "caseId": 241,
        "personId": 1
      }
    ]
  },
  {
    "id": 242,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 663,
        "image": "medal",
        "caseId": 242,
        "personId": 1
      }
    ]
  },
  {
    "id": 243,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 667,
        "image": "mikrofon",
        "caseId": 243,
        "personId": 1
      }
    ]
  },
  {
    "id": 244,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 668,
        "image": "majonez",
        "caseId": 244,
        "personId": 1
      }
    ]
  },
  {
    "id": 245,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 664,
        "image": "mafia",
        "caseId": 245,
        "personId": 1
      }
    ]
  },
  {
    "id": 246,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 672,
        "image": "mapa",
        "caseId": 246,
        "personId": 1
      }
    ]
  },
  {
    "id": 247,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 662,
        "image": "mydło",
        "caseId": 247,
        "personId": 1
      }
    ]
  },
  {
    "id": 248,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 666,
        "image": "mucha",
        "caseId": 248,
        "personId": 1
      }
    ]
  },
  {
    "id": 249,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 669,
        "image": "mleko",
        "caseId": 249,
        "personId": 1
      }
    ]
  },
  {
    "id": 250,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 665,
        "image": "magik",
        "caseId": 250,
        "personId": 1
      }
    ]
  },
  {
    "id": 251,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 676,
        "image": "mózg",
        "caseId": 251,
        "personId": 1
      }
    ]
  },
  {
    "id": 252,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 16,
    "secondElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 670,
        "image": "menażka",
        "caseId": 252,
        "personId": 1
      }
    ]
  },
  {
    "id": 253,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 498,
        "image": "doctor",
        "caseId": 253,
        "personId": 1
      }
    ]
  },
  {
    "id": 254,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 497,
        "image": "danio",
        "caseId": 254,
        "personId": 1
      }
    ]
  },
  {
    "id": 255,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 511,
        "image": "Dosia",
        "caseId": 255,
        "personId": 1
      }
    ]
  },
  {
    "id": 256,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 510,
        "image": "drzewo",
        "caseId": 256,
        "personId": 1
      }
    ]
  },
  {
    "id": 257,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 512,
        "image": "dart/rzutka",
        "caseId": 257,
        "personId": 1
      }
    ]
  },
  {
    "id": 258,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 513,
        "image": "dundersztyc",
        "caseId": 258,
        "personId": 1
      }
    ]
  },
  {
    "id": 259,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 499,
        "image": "deska",
        "caseId": 259,
        "personId": 1
      }
    ]
  },
  {
    "id": 260,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 503,
        "image": "dinozaur",
        "caseId": 260,
        "personId": 1
      }
    ]
  },
  {
    "id": 261,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 504,
        "image": "musztarda",
        "caseId": 261,
        "personId": 1
      }
    ]
  },
  {
    "id": 262,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 500,
        "image": "dafi kaczka",
        "caseId": 262,
        "personId": 1
      }
    ]
  },
  {
    "id": 263,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 509,
        "image": "dupa",
        "caseId": 263,
        "personId": 1
      }
    ]
  },
  {
    "id": 264,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 507,
        "image": "dym",
        "caseId": 264,
        "personId": 1
      }
    ]
  },
  {
    "id": 265,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 502,
        "image": "dachówka",
        "caseId": 265,
        "personId": 1
      }
    ]
  },
  {
    "id": 266,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 506,
        "image": "delicje",
        "caseId": 266,
        "personId": 1
      }
    ]
  },
  {
    "id": 267,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 501,
        "image": "pies",
        "caseId": 267,
        "personId": 1
      }
    ]
  },
  {
    "id": 268,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 514,
        "image": "dzwonek",
        "caseId": 268,
        "personId": 1
      }
    ]
  },
  {
    "id": 269,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 508,
        "image": "dynia",
        "caseId": 269,
        "personId": 1
      }
    ]
  },
  {
    "id": 270,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 18,
    "secondElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 505,
        "image": "daktyle",
        "caseId": 270,
        "personId": 1
      }
    ]
  },
  {
    "id": 271,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 570,
        "image": "hubert",
        "caseId": 271,
        "personId": 1
      }
    ]
  },
  {
    "id": 272,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 569,
        "image": "harry potter",
        "caseId": 272,
        "personId": 1
      }
    ]
  },
  {
    "id": 273,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 583,
        "image": "chusteczki",
        "caseId": 273,
        "personId": 1
      }
    ]
  },
  {
    "id": 274,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 582,
        "image": "hermiona",
        "caseId": 274,
        "personId": 1
      }
    ]
  },
  {
    "id": 275,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 584,
        "image": "Hitler",
        "caseId": 275,
        "personId": 1
      }
    ]
  },
  {
    "id": 276,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 585,
        "image": "hulajnoga",
        "caseId": 276,
        "personId": 1
      }
    ]
  },
  {
    "id": 277,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 580,
        "image": "hodyniecki",
        "caseId": 277,
        "personId": 1
      }
    ]
  },
  {
    "id": 278,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 574,
        "image": "chińczyk",
        "caseId": 278,
        "personId": 1
      }
    ]
  },
  {
    "id": 279,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 575,
        "image": "huj",
        "caseId": 279,
        "personId": 1
      }
    ]
  },
  {
    "id": 280,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 572,
        "image": "harfa",
        "caseId": 280,
        "personId": 1
      }
    ]
  },
  {
    "id": 281,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 581,
        "image": "drukarka",
        "caseId": 281,
        "personId": 1
      }
    ]
  },
  {
    "id": 282,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 578,
        "image": "hamak",
        "caseId": 282,
        "personId": 1
      }
    ]
  },
  {
    "id": 283,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 571,
        "image": "hydrant",
        "caseId": 283,
        "personId": 1
      }
    ]
  },
  {
    "id": 284,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 577,
        "image": "chleb",
        "caseId": 284,
        "personId": 1
      }
    ]
  },
  {
    "id": 285,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 573,
        "image": "hugo",
        "caseId": 285,
        "personId": 1
      }
    ]
  },
  {
    "id": 286,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 586,
        "image": "huzar",
        "caseId": 286,
        "personId": 1
      }
    ]
  },
  {
    "id": 287,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 579,
        "image": "hanuś",
        "caseId": 287,
        "personId": 1
      }
    ]
  },
  {
    "id": 288,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 19,
    "secondElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 576,
        "image": "hak",
        "caseId": 288,
        "personId": 1
      }
    ]
  },
  {
    "id": 289,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 641,
        "image": "fiolki",
        "caseId": 289,
        "personId": 1
      }
    ]
  },
  {
    "id": 290,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 642,
        "image": "lacze",
        "caseId": 290,
        "personId": 1
      }
    ]
  },
  {
    "id": 291,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 655,
        "image": "laska",
        "caseId": 291,
        "personId": 1
      }
    ]
  },
  {
    "id": 292,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 654,
        "image": "larwa",
        "caseId": 292,
        "personId": 1
      }
    ]
  },
  {
    "id": 293,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 656,
        "image": "latarka",
        "caseId": 293,
        "personId": 1
      }
    ]
  },
  {
    "id": 294,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 657,
        "image": "lustro",
        "caseId": 294,
        "personId": 1
      }
    ]
  },
  {
    "id": 295,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 652,
        "image": "lornetka",
        "caseId": 295,
        "personId": 1
      }
    ]
  },
  {
    "id": 296,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 644,
        "image": "leniwiec",
        "caseId": 296,
        "personId": 1
      }
    ]
  },
  {
    "id": 297,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 648,
        "image": "lejek",
        "caseId": 297,
        "personId": 1
      }
    ]
  },
  {
    "id": 298,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 645,
        "image": "kieliszek/lufa",
        "caseId": 298,
        "personId": 1
      }
    ]
  },
  {
    "id": 299,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 653,
        "image": "lupa",
        "caseId": 299,
        "personId": 1
      }
    ]
  },
  {
    "id": 300,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 650,
        "image": "lama",
        "caseId": 300,
        "personId": 1
      }
    ]
  },
  {
    "id": 301,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 643,
        "image": "lody",
        "caseId": 301,
        "personId": 1
      }
    ]
  },
  {
    "id": 302,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 647,
        "image": "lech kaczyński",
        "caseId": 302,
        "personId": 1
      }
    ]
  },
  {
    "id": 303,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 646,
        "image": "lego",
        "caseId": 303,
        "personId": 1
      }
    ]
  },
  {
    "id": 304,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 658,
        "image": "lazania",
        "caseId": 304,
        "personId": 1
      }
    ]
  },
  {
    "id": 305,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 651,
        "image": "linijka",
        "caseId": 305,
        "personId": 1
      }
    ]
  },
  {
    "id": 306,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 20,
    "secondElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 649,
        "image": "leki/tabletki",
        "caseId": 306,
        "personId": 1
      }
    ]
  },
  {
    "id": 307,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 552,
        "image": "gąbka",
        "caseId": 307,
        "personId": 1
      }
    ]
  },
  {
    "id": 308,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 553,
        "image": "gacie",
        "caseId": 308,
        "personId": 1
      }
    ]
  },
  {
    "id": 309,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 551,
        "image": "garnek",
        "caseId": 309,
        "personId": 1
      }
    ]
  },
  {
    "id": 310,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 565,
        "image": "grabie",
        "caseId": 310,
        "personId": 1
      }
    ]
  },
  {
    "id": 311,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 566,
        "image": "gitara",
        "caseId": 311,
        "personId": 1
      }
    ]
  },
  {
    "id": 312,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 567,
        "image": "guzik",
        "caseId": 312,
        "personId": 1
      }
    ]
  },
  {
    "id": 313,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 563,
        "image": "golarka",
        "caseId": 313,
        "personId": 1
      }
    ]
  },
  {
    "id": 314,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 555,
        "image": "gęś",
        "caseId": 314,
        "personId": 1
      }
    ]
  },
  {
    "id": 315,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 558,
        "image": "gilotyna",
        "caseId": 315,
        "personId": 1
      }
    ]
  },
  {
    "id": 316,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 556,
        "image": "gofry",
        "caseId": 316,
        "personId": 1
      }
    ]
  },
  {
    "id": 317,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 564,
        "image": "grzesiek pacewicz",
        "caseId": 317,
        "personId": 1
      }
    ]
  },
  {
    "id": 318,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 561,
        "image": "guma",
        "caseId": 318,
        "personId": 1
      }
    ]
  },
  {
    "id": 319,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 554,
        "image": "kameleon/gad",
        "caseId": 319,
        "personId": 1
      }
    ]
  },
  {
    "id": 320,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 557,
        "image": "graham",
        "caseId": 320,
        "personId": 1
      }
    ]
  },
  {
    "id": 321,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 560,
        "image": "glina/policjant",
        "caseId": 321,
        "personId": 1
      }
    ]
  },
  {
    "id": 322,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 568,
        "image": "gazeta",
        "caseId": 322,
        "personId": 1
      }
    ]
  },
  {
    "id": 323,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 562,
        "image": "gniotek",
        "caseId": 323,
        "personId": 1
      }
    ]
  },
  {
    "id": 324,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 21,
    "secondElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 559,
        "image": "gokart",
        "caseId": 324,
        "personId": 1
      }
    ]
  },
  {
    "id": 325,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 804,
        "image": "zebra",
        "caseId": 325,
        "personId": 1
      }
    ]
  },
  {
    "id": 326,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 805,
        "image": "znicz",
        "caseId": 326,
        "personId": 1
      }
    ]
  },
  {
    "id": 327,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 803,
        "image": "Ząb",
        "caseId": 327,
        "personId": 1
      }
    ]
  },
  {
    "id": 328,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 818,
        "image": "zasłona",
        "caseId": 328,
        "personId": 1
      }
    ]
  },
  {
    "id": 329,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 819,
        "image": "złoto",
        "caseId": 329,
        "personId": 1
      }
    ]
  },
  {
    "id": 330,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 820,
        "image": "zuzia",
        "caseId": 330,
        "personId": 1
      }
    ]
  },
  {
    "id": 331,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 816,
        "image": "zombie",
        "caseId": 331,
        "personId": 1
      }
    ]
  },
  {
    "id": 332,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 807,
        "image": "zeszyt",
        "caseId": 332,
        "personId": 1
      }
    ]
  },
  {
    "id": 333,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 810,
        "image": "zima/śnieg",
        "caseId": 333,
        "personId": 1
      }
    ]
  },
  {
    "id": 334,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 811,
        "image": "zając",
        "caseId": 334,
        "personId": 1
      }
    ]
  },
  {
    "id": 335,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 817,
        "image": "zapałki",
        "caseId": 335,
        "personId": 1
      }
    ]
  },
  {
    "id": 336,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 814,
        "image": "zamek",
        "caseId": 336,
        "personId": 1
      }
    ]
  },
  {
    "id": 337,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 806,
        "image": "zderzak",
        "caseId": 337,
        "personId": 1
      }
    ]
  },
  {
    "id": 338,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 809,
        "image": "zaha",
        "caseId": 338,
        "personId": 1
      }
    ]
  },
  {
    "id": 339,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 813,
        "image": "zlew",
        "caseId": 339,
        "personId": 1
      }
    ]
  },
  {
    "id": 340,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 808,
        "image": "zegar",
        "caseId": 340,
        "personId": 1
      }
    ]
  },
  {
    "id": 341,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 815,
        "image": "znak",
        "caseId": 341,
        "personId": 1
      }
    ]
  },
  {
    "id": 342,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 22,
    "secondElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 812,
        "image": "zakonnica",
        "caseId": 342,
        "personId": 1
      }
    ]
  },
  {
    "id": 343,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 678,
        "image": "anioł",
        "caseId": 343,
        "personId": 1
      }
    ]
  },
  {
    "id": 344,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 679,
        "image": "nocnik",
        "caseId": 344,
        "personId": 1
      }
    ]
  },
  {
    "id": 345,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 677,
        "image": "Natalia",
        "caseId": 345,
        "personId": 1
      }
    ]
  },
  {
    "id": 346,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 692,
        "image": "nosorożec",
        "caseId": 346,
        "personId": 1
      }
    ]
  },
  {
    "id": 347,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 691,
        "image": "narty",
        "caseId": 347,
        "personId": 1
      }
    ]
  },
  {
    "id": 348,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 8,
    "thirdElement": {
      "id": 8,
      "name": "DBR",
      "type": 1,
      "position": 7,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 8,
          "mark": "U",
          "elementId": 8,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 693,
        "image": "nurek",
        "caseId": 348,
        "personId": 1
      }
    ]
  },
  {
    "id": 349,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 690,
        "image": "nomex / strażak",
        "caseId": 349,
        "personId": 1
      }
    ]
  },
  {
    "id": 350,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 681,
        "image": "nemo",
        "caseId": 350,
        "personId": 1
      }
    ]
  },
  {
    "id": 351,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 685,
        "image": "nić",
        "caseId": 351,
        "personId": 1
      }
    ]
  },
  {
    "id": 352,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 686,
        "image": "najka",
        "caseId": 352,
        "personId": 1
      }
    ]
  },
  {
    "id": 353,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 682,
        "image": "lampa naftowa",
        "caseId": 353,
        "personId": 1
      }
    ]
  },
  {
    "id": 354,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 16,
    "thirdElement": {
      "id": 16,
      "name": "BDR",
      "type": 1,
      "position": 7,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 16,
          "mark": "M",
          "elementId": 16,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 689,
        "image": "namiot",
        "caseId": 354,
        "personId": 1
      }
    ]
  },
  {
    "id": 355,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 680,
        "image": "golas/nudysta",
        "caseId": 355,
        "personId": 1
      }
    ]
  },
  {
    "id": 356,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 684,
        "image": "nochal",
        "caseId": 356,
        "personId": 1
      }
    ]
  },
  {
    "id": 357,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 688,
        "image": "naleśnik",
        "caseId": 357,
        "personId": 1
      }
    ]
  },
  {
    "id": 358,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 683,
        "image": "noga",
        "caseId": 358,
        "personId": 1
      }
    ]
  },
  {
    "id": 359,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 694,
        "image": "nóż",
        "caseId": 359,
        "personId": 1
      }
    ]
  },
  {
    "id": 360,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 23,
    "secondElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 24,
    "thirdElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 687,
        "image": "nakrętka<br>",
        "caseId": 360,
        "personId": 1
      }
    ]
  },
  {
    "id": 361,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 2,
    "thirdElement": {
      "id": 2,
      "name": "UFL",
      "type": 1,
      "position": 1,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 2,
          "mark": "B",
          "elementId": 2,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 624,
        "image": "kubek",
        "caseId": 361,
        "personId": 1
      }
    ]
  },
  {
    "id": 362,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 3,
    "thirdElement": {
      "id": 3,
      "name": "UBL",
      "type": 1,
      "position": 2,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 3,
          "mark": "C",
          "elementId": 3,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 625,
        "image": "koc",
        "caseId": 362,
        "personId": 1
      }
    ]
  },
  {
    "id": 363,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 4,
    "thirdElement": {
      "id": 4,
      "name": "UBR",
      "type": 1,
      "position": 3,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 4,
          "mark": "A",
          "elementId": 4,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 623,
        "image": "Kamil",
        "caseId": 363,
        "personId": 1
      }
    ]
  },
  {
    "id": 364,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 5,
    "thirdElement": {
      "id": 5,
      "name": "DFR",
      "type": 1,
      "position": 4,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 5,
          "mark": "S",
          "elementId": 5,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 638,
        "image": "kasztan",
        "caseId": 364,
        "personId": 1
      }
    ]
  },
  {
    "id": 365,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 6,
    "thirdElement": {
      "id": 6,
      "name": "DFL",
      "type": 1,
      "position": 5,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 6,
          "mark": "R",
          "elementId": 6,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 637,
        "image": "kreda",
        "caseId": 365,
        "personId": 1
      }
    ]
  },
  {
    "id": 366,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 7,
    "thirdElement": {
      "id": 7,
      "name": "DBL",
      "type": 1,
      "position": 6,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 7,
          "mark": "T",
          "elementId": 7,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 639,
        "image": "katapulta",
        "caseId": 366,
        "personId": 1
      }
    ]
  },
  {
    "id": 367,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 10,
    "thirdElement": {
      "id": 10,
      "name": "LUF",
      "type": 1,
      "position": 1,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 10,
          "mark": "O",
          "elementId": 10,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 635,
        "image": "kot",
        "caseId": 367,
        "personId": 1
      }
    ]
  },
  {
    "id": 368,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 11,
    "thirdElement": {
      "id": 11,
      "name": "BUL",
      "type": 1,
      "position": 2,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 11,
          "mark": "E",
          "elementId": 11,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 627,
        "image": "kebab",
        "caseId": 368,
        "personId": 1
      }
    ]
  },
  {
    "id": 369,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 12,
    "thirdElement": {
      "id": 12,
      "name": "RUB",
      "type": 1,
      "position": 3,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 12,
          "mark": "I",
          "elementId": 12,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 631,
        "image": "kiełbasa",
        "caseId": 369,
        "personId": 1
      }
    ]
  },
  {
    "id": 370,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 13,
    "thirdElement": {
      "id": 13,
      "name": "RDF",
      "type": 1,
      "position": 4,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 13,
          "mark": "J",
          "elementId": 13,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 632,
        "image": "kajak",
        "caseId": 370,
        "personId": 1
      }
    ]
  },
  {
    "id": 371,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 14,
    "thirdElement": {
      "id": 14,
      "name": "FDL",
      "type": 1,
      "position": 5,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 14,
          "mark": "F",
          "elementId": 14,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 628,
        "image": "kufer",
        "caseId": 371,
        "personId": 1
      }
    ]
  },
  {
    "id": 372,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 15,
    "thirdElement": {
      "id": 15,
      "name": "LDB",
      "type": 1,
      "position": 6,
      "orientation": 1,
      "letterMarks": [
        {
          "id": 15,
          "mark": "P",
          "elementId": 15,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 636,
        "image": "kupa",
        "caseId": 372,
        "personId": 1
      }
    ]
  },
  {
    "id": 373,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 18,
    "thirdElement": {
      "id": 18,
      "name": "FUL",
      "type": 1,
      "position": 1,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 18,
          "mark": "D",
          "elementId": 18,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 626,
        "image": "kajdanki",
        "caseId": 373,
        "personId": 1
      }
    ]
  },
  {
    "id": 374,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 19,
    "thirdElement": {
      "id": 19,
      "name": "LUB",
      "type": 1,
      "position": 2,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 19,
          "mark": "H",
          "elementId": 19,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 630,
        "image": "kuchenka",
        "caseId": 374,
        "personId": 1
      }
    ]
  },
  {
    "id": 375,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 20,
    "thirdElement": {
      "id": 20,
      "name": "BUR",
      "type": 1,
      "position": 3,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 20,
          "mark": "L",
          "elementId": 20,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 633,
        "image": "klucz",
        "caseId": 375,
        "personId": 1
      }
    ]
  },
  {
    "id": 376,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 21,
    "thirdElement": {
      "id": 21,
      "name": "FDR",
      "type": 1,
      "position": 4,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 21,
          "mark": "G",
          "elementId": 21,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 629,
        "image": "kaganiec",
        "caseId": 376,
        "personId": 1
      }
    ]
  },
  {
    "id": 377,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 22,
    "thirdElement": {
      "id": 22,
      "name": "LDF",
      "type": 1,
      "position": 5,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 22,
          "mark": "Z",
          "elementId": 22,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 640,
        "image": "koza",
        "caseId": 377,
        "personId": 1
      }
    ]
  },
  {
    "id": 378,
    "firstElementId": 1,
    "firstElement": {
      "id": 1,
      "name": "UFR",
      "type": 1,
      "position": 0,
      "orientation": 0,
      "letterMarks": [
        {
          "id": 1,
          "mark": "X",
          "elementId": 1,
          "personId": 1,
          "person": null
        }
      ]
    },
    "secondElementId": 24,
    "secondElement": {
      "id": 24,
      "name": "RDB",
      "type": 1,
      "position": 7,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 24,
          "mark": "K",
          "elementId": 24,
          "personId": 1,
          "person": null
        }
      ]
    },
    "thirdElementId": 23,
    "thirdElement": {
      "id": 23,
      "name": "BDL",
      "type": 1,
      "position": 6,
      "orientation": 2,
      "letterMarks": [
        {
          "id": 23,
          "mark": "N",
          "elementId": 23,
          "personId": 1,
          "person": null
        }
      ]
    },
    "personId": 1,
    "caseType": 1,
    "person": null,
    "isActive": true,
    "letterPairs": [
      {
        "id": 634,
        "image": "kanapka",
        "caseId": 378,
        "personId": 1
      }
    ]
  }
]