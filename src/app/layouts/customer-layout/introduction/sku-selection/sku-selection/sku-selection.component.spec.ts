import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuSelectionComponent } from './sku-selection.component';

describe('SkuSelectionComponent', () => {
  let component: SkuSelectionComponent;
  let fixture: ComponentFixture<SkuSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkuSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkuSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
