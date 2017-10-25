/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Not_foundComponent } from './not_found.component';

describe('Not_foundComponent', () => {
  let component: Not_foundComponent;
  let fixture: ComponentFixture<Not_foundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Not_foundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Not_foundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
