import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CongratsPopupComponent } from '../congrats-popup/congrats-popup.component';
import { CreateMockUpComponent } from '../create-mock-up/create-mock-up.component';

@Component({
  selector: 'app-bundle-skus',
  templateUrl: './bundle-skus.component.html',
  styleUrls: ['./bundle-skus.component.css']
})
export class BundleSkusComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  goToNext() {
  }

  congratsPopup() {
    const modalRef = this.modalService.open(CongratsPopupComponent);
    modalRef.componentInstance.name = 'World';
  }
  createMockUpPopup() {
    const modalRef = this.modalService.open(CreateMockUpComponent);
    modalRef.componentInstance.name = 'World';
  }

}
