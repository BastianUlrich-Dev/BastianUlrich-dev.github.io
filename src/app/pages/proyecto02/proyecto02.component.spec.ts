import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto02Component } from './proyecto02.component';

describe('Proyecto02Component', () => {
  let component: Proyecto02Component;
  let fixture: ComponentFixture<Proyecto02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyecto02Component]
    });
    fixture = TestBed.createComponent(Proyecto02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
