import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStatsComponent } from './success-stats.component';

describe('SuccessStatsComponent', () => {
  let component: SuccessStatsComponent;
  let fixture: ComponentFixture<SuccessStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
