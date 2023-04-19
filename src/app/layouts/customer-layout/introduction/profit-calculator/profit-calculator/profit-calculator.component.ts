import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profit-calculator',
  templateUrl: './profit-calculator.component.html',
  styleUrls: ['./profit-calculator.component.css']
})
export class ProfitCalculatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNext(){
    this.router.navigate(['welcome/introduction/selectedskus']);
  }


}
