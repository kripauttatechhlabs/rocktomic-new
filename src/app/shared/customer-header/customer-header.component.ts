import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent implements OnInit {

  page_index = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
