import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmBooksComponent } from './lm-books.component';

describe('LmBooksComponent', () => {
  let component: LmBooksComponent;
  let fixture: ComponentFixture<LmBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
