import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurConsultantsComponent } from './our-consultants.component';

describe('OurConsultantsComponent', () => {
  let component: OurConsultantsComponent;
  let fixture: ComponentFixture<OurConsultantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurConsultantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
