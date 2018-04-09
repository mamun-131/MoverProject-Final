import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEntryFormComponent } from './order-entry-form.component';

describe('OrderEntryFormComponent', () => {
  let component: OrderEntryFormComponent;
  let fixture: ComponentFixture<OrderEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
