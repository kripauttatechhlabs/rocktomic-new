import { Component, OnInit } from '@angular/core';
import { json } from 'body-parser';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent implements OnInit {

  page_index = 1;
  loggedUserName='';
  userDetails:any;
  constructor() { }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.loggedUserName = this.userDetails?.username;
  }

}
