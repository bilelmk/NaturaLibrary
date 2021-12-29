import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmErrorsComponent } from './lm-errors.component';

describe('LmErrorsComponent', () => {
  let component: LmErrorsComponent;
  let fixture: ComponentFixture<LmErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
