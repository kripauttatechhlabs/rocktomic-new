import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationProcessComponent } from './consultation-process.component';

describe('ConsultationProcessComponent', () => {
  let component: ConsultationProcessComponent;
  let fixture: ComponentFixture<ConsultationProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
