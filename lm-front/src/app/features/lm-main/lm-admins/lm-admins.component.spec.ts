import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmAdminsComponent } from './lm-admins.component';

describe('LmAdminsComponent', () => {
  let component: LmAdminsComponent;
  let fixture: ComponentFixture<LmAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
