import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelAppointmentComponent } from '../cancel-appointment/cancel-appointment/cancel-appointment.component';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router: Router,  private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  goToNext(){
    this.router.navigate(['welcome/introduction/skuselection']);
  }
  cancelAppointment() {
		const modalRef = this.modalService.open(CancelAppointmentComponent,{windowClass: 'appcustom-modal-med'});
	}


}
