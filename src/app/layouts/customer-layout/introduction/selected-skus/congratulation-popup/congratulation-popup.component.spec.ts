import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratulationPopupComponent } from './congratulation-popup.component';

describe('CongratulationPopupComponent', () => {
  let component: CongratulationPopupComponent;
  let fixture: ComponentFixture<CongratulationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratulationPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongratulationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
