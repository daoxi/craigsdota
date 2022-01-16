import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Left4dead2Component } from './left4dead2.component';

describe('Left4dead2Component', () => {
  let component: Left4dead2Component;
  let fixture: ComponentFixture<Left4dead2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Left4dead2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Left4dead2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
