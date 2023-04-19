import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultation-appointment',
  templateUrl: './consultation-appointment.component.html',
  styleUrls: ['./consultation-appointment.component.css']
})
export class ConsultationAppointmentComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToNext(){
    this.router.navigate(['customer//introduction/informationverification']);
  }

}
