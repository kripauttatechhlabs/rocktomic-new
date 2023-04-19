import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-your-sku',
  templateUrl: './pick-your-sku.component.html',
  styleUrls: ['./pick-your-sku.component.css']
})
export class PickYourSkuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNext(){
    this.router.navigate(['customer/introduction/payment']);
  
  }

}
