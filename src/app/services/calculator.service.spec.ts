import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sum two numbers correctly', () => {
    expect(service.sum(16, 2)).toEqual(18);
  });

  it('should subtract two numbers correctly', () => {
    expect(service.subtract(16, 2)).toEqual(14);
  });

  it('should divide two numbers correctly', () => {
    expect(service.divide(16, 2)).toEqual(8);
  });

  it('should throw an error when attempting to divide by zero', () => {
    expect(() => service.divide(10,0)).toThrow();
  });

  it('should multiply two numbers correctly', () => {
    expect(service.multiply(16, 2)).toEqual(32);
  });

});
