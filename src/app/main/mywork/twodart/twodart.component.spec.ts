import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { twodartComponent } from './twodart.component';

describe('twodartComponent', () => {
  let component: twodartComponent;
  let fixture: ComponentFixture<twodartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ twodartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(twodartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
