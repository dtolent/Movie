import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGenreComponent } from './all-genre.component';

describe('AllGenreComponent', () => {
  let component: AllGenreComponent;
  let fixture: ComponentFixture<AllGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
