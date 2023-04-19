import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleSkusComponent } from './bundle-skus.component';

describe('BundleSkusComponent', () => {
  let component: BundleSkusComponent;
  let fixture: ComponentFixture<BundleSkusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundleSkusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleSkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
