import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSkusComponent } from './selected-skus.component';

describe('SelectedSkusComponent', () => {
  let component: SelectedSkusComponent;
  let fixture: ComponentFixture<SelectedSkusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedSkusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedSkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
