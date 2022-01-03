import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmBooksModalComponent } from './lm-books-modal.component';

describe('LmBooksModalComponent', () => {
  let component: LmBooksModalComponent;
  let fixture: ComponentFixture<LmBooksModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmBooksModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmBooksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
