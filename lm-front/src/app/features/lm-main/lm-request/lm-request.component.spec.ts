import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmRequestComponent } from './lm-request.component';

describe('LmRequestComponent', () => {
  let component: LmRequestComponent;
  let fixture: ComponentFixture<LmRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
