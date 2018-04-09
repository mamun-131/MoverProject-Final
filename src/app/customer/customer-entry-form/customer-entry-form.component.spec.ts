import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEntryFormComponent } from './customer-entry-form.component';

describe('CustomerEntryFormComponent', () => {
  let component: CustomerEntryFormComponent;
  let fixture: ComponentFixture<CustomerEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
