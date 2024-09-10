import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  sum(a: number, b: number): number {
  return a + b;
  }

  subtract(a: number, b: number){
    return a - b;
  }

  divide(a: number, b: number): number {
    if (b === 0){
      throw new Error("Divisão por zero.");
    }
    return a / b;
  }

  multiply(a: number, b: number){
    return a * b;
  }

}
