import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmUsersComponent } from './lm-users.component';

describe('LmUsersComponent', () => {
  let component: LmUsersComponent;
  let fixture: ComponentFixture<LmUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
