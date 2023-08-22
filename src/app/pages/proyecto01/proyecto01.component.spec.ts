import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto01Component } from './proyecto01.component';

describe('Proyecto01Component', () => {
  let component: Proyecto01Component;
  let fixture: ComponentFixture<Proyecto01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyecto01Component]
    });
    fixture = TestBed.createComponent(Proyecto01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
