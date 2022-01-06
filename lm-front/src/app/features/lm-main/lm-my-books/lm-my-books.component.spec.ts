import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmMyBooksComponent } from './lm-my-books.component';

describe('LmMyBooksComponent', () => {
  let component: LmMyBooksComponent;
  let fixture: ComponentFixture<LmMyBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmMyBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmMyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
