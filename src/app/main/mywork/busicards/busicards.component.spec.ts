import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusicardsComponent } from './busicards.component';

describe('BusicardsComponent', () => {
  let component: BusicardsComponent;
  let fixture: ComponentFixture<BusicardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusicardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusicardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
