import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNowy } from './test-nowy';

describe('TestNowy', () => {
  let component: TestNowy;
  let fixture: ComponentFixture<TestNowy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestNowy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestNowy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
