import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmSidebarComponent } from './lm-sidebar.component';

describe('LmSidebarComponent', () => {
  let component: LmSidebarComponent;
  let fixture: ComponentFixture<LmSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
