import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    
   }

  ngOnInit(): void {
  }

  goToNext(){
    this.router.navigate(['customer/introduction/brand']);
  }

}
