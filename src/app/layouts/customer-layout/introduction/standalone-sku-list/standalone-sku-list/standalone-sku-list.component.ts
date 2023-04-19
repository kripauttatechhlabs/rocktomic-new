import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standalone-sku-list',
  templateUrl: './standalone-sku-list.component.html',
  styleUrls: ['./standalone-sku-list.component.css']
})
export class StandaloneSkuListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNext(){
    this.router.navigate(['welcome/introduction/profitcalculator']);
  }

}
