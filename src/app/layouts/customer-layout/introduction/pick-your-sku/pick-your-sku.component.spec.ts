import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickYourSkuComponent } from './pick-your-sku.component';

describe('PickYourSkuComponent', () => {
  let component: PickYourSkuComponent;
  let fixture: ComponentFixture<PickYourSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickYourSkuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickYourSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
