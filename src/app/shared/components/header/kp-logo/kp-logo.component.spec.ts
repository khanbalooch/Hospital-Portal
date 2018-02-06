import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpLogoComponent } from './kp-logo.component';

describe('KpLogoComponent', () => {
  let component: KpLogoComponent;
  let fixture: ComponentFixture<KpLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
