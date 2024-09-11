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
    component.num1 = 2;
    component.num2 = 3;
    component.sum();

    expect(component.result).toEqual(5);
  });

  it('should adequately update the result variable in a sum', () => {
    component.num1 = 2;
    component.num2 = 3;
    component.sum();

    expect(component.result).toBe(5);
  });

  it('should display the result of a sum on the template', () => {
    component.num1 = 2;
    component.num2 = 3;
    component.sum();
    fixture.detectChanges();
  
    const resultElement = fixture.nativeElement.querySelector('p');
    expect(resultElement.textContent).toContain('5');
  });

  it('should update the variables with the input from the user', () => {
 
    const input1 = fixture.nativeElement.querySelector('input[placeholder="Número 1"]');
    const input2 = fixture.nativeElement.querySelector('input[placeholder="Número 2"]');

    input1.value = '2';
    input1.dispatchEvent(new Event('input'));

    input2.value = '3';
    input2.dispatchEvent(new Event('input'));
    
    fixture.detectChanges();

    expect(component.num1).toBe(2);
    expect(component.num2).toBe(3);
  });


});
