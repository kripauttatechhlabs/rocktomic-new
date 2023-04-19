import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additional-sku-moq',
  templateUrl: './additional-sku-moq.component.html',
  styleUrls: ['./additional-sku-moq.component.css']
})
export class AdditionalSkuMoqComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToNext(){
    this.router.navigate(['customer/introduction/consultationprocess']);
  }

}
