import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudientComponent } from './form-studient.component';

describe('FormStudientComponent', () => {
  let component: FormStudientComponent;
  let fixture: ComponentFixture<FormStudientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStudientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStudientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
