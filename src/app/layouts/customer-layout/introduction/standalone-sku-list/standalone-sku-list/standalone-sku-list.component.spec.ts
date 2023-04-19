import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneSkuListComponent } from './standalone-sku-list.component';

describe('StandaloneSkuListComponent', () => {
  let component: StandaloneSkuListComponent;
  let fixture: ComponentFixture<StandaloneSkuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneSkuListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneSkuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
