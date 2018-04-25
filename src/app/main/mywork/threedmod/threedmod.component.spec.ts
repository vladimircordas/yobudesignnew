import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedmodComponent } from './threedmod.component';

describe('ThreedmodComponent', () => {
  let component: ThreedmodComponent;
  let fixture: ComponentFixture<ThreedmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreedmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
