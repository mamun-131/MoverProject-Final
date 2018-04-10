import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsubmissionComponent } from './postsubmission.component';

describe('PostsubmissionComponent', () => {
  let component: PostsubmissionComponent;
  let fixture: ComponentFixture<PostsubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
