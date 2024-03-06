import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent implements OnInit {
  ngOnInit() {
    const script = document.createElement('script');
    script.src = '../../../assets/calculator/calculator.js';
    document.body.appendChild(script);
  }
}
