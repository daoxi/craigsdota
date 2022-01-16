import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPwComponent } from './reset-pw.component';

describe('ResetPwComponent', () => {
  let component: ResetPwComponent;
  let fixture: ComponentFixture<ResetPwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
