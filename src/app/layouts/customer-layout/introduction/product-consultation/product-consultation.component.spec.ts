import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductConsultationComponent } from './product-consultation.component';

describe('ProductConsultationComponent', () => {
  let component: ProductConsultationComponent;
  let fixture: ComponentFixture<ProductConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
