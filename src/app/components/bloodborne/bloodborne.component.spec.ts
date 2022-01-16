import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodborneComponent } from './bloodborne.component';

describe('BloodborneComponent', () => {
  let component: BloodborneComponent;
  let fixture: ComponentFixture<BloodborneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodborneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodborneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
