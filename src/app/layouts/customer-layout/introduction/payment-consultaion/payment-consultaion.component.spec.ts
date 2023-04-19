import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConsultaionComponent } from './payment-consultaion.component';

describe('PaymentConsultaionComponent', () => {
  let component: PaymentConsultaionComponent;
  let fixture: ComponentFixture<PaymentConsultaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentConsultaionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentConsultaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
