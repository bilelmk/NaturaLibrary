import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmMainComponent } from './lm-main.component';

describe('LmMainComponent', () => {
  let component: LmMainComponent;
  let fixture: ComponentFixture<LmMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
