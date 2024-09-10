import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly sum two numbers', () => {
    const num1 = 121;
    const num2 = 212;

    expect(component.calculatorService.sum(num1, num2)).toEqual(333);
  });

  it('should correctly sum two numbers2', () => {
    component.num1 = 2;
    component.num2 = 3;
    component.sum();

    expect(component.result).toEqual(5);
  });

  it('should return the object result of the sum to the user', () => {
    component.num1 = 2;
    component.num2 = 3;
    component.sum();

    expect(component.result).toBe(5);
  });


});
