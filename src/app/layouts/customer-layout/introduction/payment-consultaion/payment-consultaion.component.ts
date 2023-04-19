import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddNewCardComponent } from './add-new-card/add-new-card.component'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment-consultaion',
  templateUrl: './payment-consultaion.component.html',
  styleUrls: ['./payment-consultaion.component.css']
})
export class PaymentConsultaionComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  addNewCard(){
    
  } 
  goToNext(){
    this.router.navigate(['customer/introduction/product']);
  
  }
  addNewCardOpen() {
		const modalRef = this.modalService.open(AddNewCardComponent);
		modalRef.componentInstance.name = 'World';
	}

}
