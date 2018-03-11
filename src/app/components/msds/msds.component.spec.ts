import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdsComponent } from './msds.component';

describe('MsdsComponent', () => {
  let component: MsdsComponent;
  let fixture: ComponentFixture<MsdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
