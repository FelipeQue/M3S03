import { Component, inject } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  calculatorService = inject(CalculatorService);

  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  sum(): void{
    this.result = this.calculatorService.sum(this.num1, this.num2);
  }

  subtract(): void{
    this.result = this.calculatorService.subtract(this.num1, this.num2);
  }

  divide(): void{
    this.result = this.calculatorService.divide(this.num1, this.num2);
  }

  multiply(): void{
    this.result = this.calculatorService.multiply(this.num1, this.num2);
  }

}
