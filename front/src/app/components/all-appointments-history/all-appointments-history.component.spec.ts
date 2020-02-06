import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAppointmentsHistoryComponent } from './all-appointments-history.component';

describe('AllAppointmentsHistoryComponent', () => {
  let component: AllAppointmentsHistoryComponent;
  let fixture: ComponentFixture<AllAppointmentsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAppointmentsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAppointmentsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
