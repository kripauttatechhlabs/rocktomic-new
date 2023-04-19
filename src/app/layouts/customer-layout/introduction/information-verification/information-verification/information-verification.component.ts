import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-verification',
  templateUrl: './information-verification.component.html',
  styleUrls: ['./information-verification.component.css']
})
export class InformationVerificationComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }
  goToNext(){
    this.router.navigate(['customer/introduction/confirmation']);
  }

}
