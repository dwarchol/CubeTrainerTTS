import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPAge } from './main-page';

describe('MainPAge', () => {
  let component: MainPAge;
  let fixture: ComponentFixture<MainPAge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPAge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPAge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
