import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto03Component } from './proyecto03.component';

describe('Proyecto03Component', () => {
  let component: Proyecto03Component;
  let fixture: ComponentFixture<Proyecto03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyecto03Component]
    });
    fixture = TestBed.createComponent(Proyecto03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
