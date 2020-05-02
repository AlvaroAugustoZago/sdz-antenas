/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InteressouComponent } from './interessou.component';

describe('InteressouComponent', () => {
  let component: InteressouComponent;
  let fixture: ComponentFixture<InteressouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteressouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteressouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
