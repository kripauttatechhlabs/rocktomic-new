import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CongratulationPopupComponent } from '../congratulation-popup/congratulation-popup.component';

@Component({
  selector: 'app-selected-skus',
  templateUrl: './selected-skus.component.html',
  styleUrls: ['./selected-skus.component.css']
})
export class SelectedSkusComponent implements OnInit {

  constructor(private router : Router,  private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  goToNext(){
    this.router.navigate(['customer/introduction/bundlesku']);
  }

  congratulationPopup() {
		const modalRef = this.modalService.open(CongratulationPopupComponent);
		modalRef.componentInstance.name = 'World';
	}
  
}
