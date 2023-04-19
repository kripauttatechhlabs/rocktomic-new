import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-new-card',
  templateUrl: './add-new-card.component.html',
  styleUrls: ['./add-new-card.component.css']
})
export class AddNewCardComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
