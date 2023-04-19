import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMockUpComponent } from './create-mock-up.component';

describe('CreateMockUpComponent', () => {
  let component: CreateMockUpComponent;
  let fixture: ComponentFixture<CreateMockUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMockUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMockUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
