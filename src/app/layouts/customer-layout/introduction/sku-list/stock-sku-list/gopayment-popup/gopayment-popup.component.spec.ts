import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopaymentPopupComponent } from './gopayment-popup.component';

describe('GopaymentPopupComponent', () => {
  let component: GopaymentPopupComponent;
  let fixture: ComponentFixture<GopaymentPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopaymentPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopaymentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
