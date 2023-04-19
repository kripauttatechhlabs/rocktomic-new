import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sku-selection',
  templateUrl: './sku-selection.component.html',
  styleUrls: ['./sku-selection.component.css']
})
export class SkuSelectionComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  goToNext(){
    this.router.navigate(['welcome/introduction/stocklist']);
  }

}
