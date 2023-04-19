import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-consultation',
  templateUrl: './product-consultation.component.html',
  styleUrls: ['./product-consultation.component.css']
})
export class ProductConsultationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToNext(){
    this.router.navigate(['welcome/introduction/appointment']);
  
  }
}
