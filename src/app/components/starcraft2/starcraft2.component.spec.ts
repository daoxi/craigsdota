import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Starcraft2Component } from './starcraft2.component';

describe('Starcraft2Component', () => {
  let component: Starcraft2Component;
  let fixture: ComponentFixture<Starcraft2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Starcraft2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Starcraft2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
