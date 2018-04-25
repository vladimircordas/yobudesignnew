import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookilluComponent } from './bookillu.component';

describe('BookilluComponent', () => {
  let component: BookilluComponent;
  let fixture: ComponentFixture<BookilluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookilluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookilluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
