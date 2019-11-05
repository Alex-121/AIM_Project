import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSortedComponent } from './main-page-sorted.component';

describe('MainPageSortedComponent', () => {
  let component: MainPageSortedComponent;
  let fixture: ComponentFixture<MainPageSortedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageSortedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
