import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultation-process',
  templateUrl: './consultation-process.component.html',
  styleUrls: ['./consultation-process.component.css']
})
export class ConsultationProcessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNext(){
    this.router.navigate(['welcome/introduction/standaloneskulist']);

  }

}
