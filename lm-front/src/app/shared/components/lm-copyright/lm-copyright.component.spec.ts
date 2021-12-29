import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmCopyrightComponent } from './lm-copyright.component';

describe('LmCopyrightComponent', () => {
  let component: LmCopyrightComponent;
  let fixture: ComponentFixture<LmCopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmCopyrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
