import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmStatsComponent } from './lm-stats.component';

describe('LmStatsComponent', () => {
  let component: LmStatsComponent;
  let fixture: ComponentFixture<LmStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
