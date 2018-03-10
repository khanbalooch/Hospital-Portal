import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCircleCardComponent } from './home-circle-card.component';

describe('HomeCircleCardComponent', () => {
  let component: HomeCircleCardComponent;
  let fixture: ComponentFixture<HomeCircleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCircleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCircleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
