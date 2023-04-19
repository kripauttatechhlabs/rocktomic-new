import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationAppointmentComponent } from './consultation-appointment.component';

describe('ConsultationAppointmentComponent', () => {
  let component: ConsultationAppointmentComponent;
  let fixture: ComponentFixture<ConsultationAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
