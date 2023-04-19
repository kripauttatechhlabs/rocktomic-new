import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSkuListComponent } from './stock-sku-list.component';

describe('StockSkuListComponent', () => {
  let component: StockSkuListComponent;
  let fixture: ComponentFixture<StockSkuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockSkuListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockSkuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
