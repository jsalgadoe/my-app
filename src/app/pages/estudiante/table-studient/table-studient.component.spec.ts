import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStudientComponent } from './table-studient.component';

describe('TableStudientComponent', () => {
  let component: TableStudientComponent;
  let fixture: ComponentFixture<TableStudientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStudientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStudientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
