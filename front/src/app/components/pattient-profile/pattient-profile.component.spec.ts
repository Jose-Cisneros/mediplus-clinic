import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PattientProfileComponent } from './pattient-profile.component';

describe('PattientProfileComponent', () => {
  let component: PattientProfileComponent;
  let fixture: ComponentFixture<PattientProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PattientProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PattientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
