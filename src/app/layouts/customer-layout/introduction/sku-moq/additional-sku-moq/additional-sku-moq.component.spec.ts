import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalSkuMoqComponent } from './additional-sku-moq.component';

describe('AdditionalSkuMoqComponent', () => {
  let component: AdditionalSkuMoqComponent;
  let fixture: ComponentFixture<AdditionalSkuMoqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalSkuMoqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalSkuMoqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
