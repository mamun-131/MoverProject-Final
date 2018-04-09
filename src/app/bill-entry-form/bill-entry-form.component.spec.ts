import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillEntryFormComponent } from './bill-entry-form.component';

describe('BillEntryFormComponent', () => {
  let component: BillEntryFormComponent;
  let fixture: ComponentFixture<BillEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
