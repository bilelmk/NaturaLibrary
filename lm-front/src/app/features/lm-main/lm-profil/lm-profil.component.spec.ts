import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmProfilComponent } from './lm-profil.component';

describe('LmProfilComponent', () => {
  let component: LmProfilComponent;
  let fixture: ComponentFixture<LmProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
