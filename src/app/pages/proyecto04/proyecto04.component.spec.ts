import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto04Component } from './proyecto04.component';

describe('Proyecto04Component', () => {
  let component: Proyecto04Component;
  let fixture: ComponentFixture<Proyecto04Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyecto04Component]
    });
    fixture = TestBed.createComponent(Proyecto04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
