import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmUsersModalComponent } from './lm-users-modal.component';

describe('LmUsersModalComponent', () => {
  let component: LmUsersModalComponent;
  let fixture: ComponentFixture<LmUsersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmUsersModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmUsersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
