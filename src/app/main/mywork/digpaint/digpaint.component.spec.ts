import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigpaintComponent } from './digpaint.component';

describe('DigpaintComponent', () => {
  let component: DigpaintComponent;
  let fixture: ComponentFixture<DigpaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigpaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigpaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
