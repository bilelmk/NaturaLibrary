import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmRegisterComponent } from './lm-register.component';

describe('LmRegisterComponent', () => {
  let component: LmRegisterComponent;
  let fixture: ComponentFixture<LmRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
