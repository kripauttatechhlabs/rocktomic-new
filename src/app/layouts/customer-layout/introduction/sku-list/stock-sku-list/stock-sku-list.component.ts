import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SavePopupComponent } from './save-popup/save-popup.component';
import { GopaymentPopupComponent } from './gopayment-popup/gopayment-popup.component';

@Component({
  selector: 'app-stock-sku-list',
  templateUrl: './stock-sku-list.component.html',
  styleUrls: ['./stock-sku-list.component.css']
})
export class StockSkuListComponent implements OnInit {

  constructor(private router:Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  goToNext(){
    this.router.navigate(['welcome/introduction/additionalsku']);
  }
  savePopup() {
		const modalRef = this.modalService.open(SavePopupComponent);
		modalRef.componentInstance.name = 'World';
	}

  goPaymentPopup() {
		const modalRef = this.modalService.open(GopaymentPopupComponent);
		modalRef.componentInstance.name = 'World';
	}
  

}
