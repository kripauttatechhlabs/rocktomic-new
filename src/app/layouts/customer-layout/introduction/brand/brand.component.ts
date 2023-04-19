import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
 
  address:any;
  isAddress:boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showAddress(event:any){
    if(event.target.checked ==true){
      this.isAddress = true;
    }else{
      this.isAddress = false;
    }

  }
  goToNext(){
    this.router.navigate(['welcome/introduction/sku']);
  
  }

}
