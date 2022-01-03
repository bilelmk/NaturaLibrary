import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmAdminsModalComponent } from './lm-admins-modal.component';

describe('LmAdminsModalComponent', () => {
  let component: LmAdminsModalComponent;
  let fixture: ComponentFixture<LmAdminsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmAdminsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmAdminsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
