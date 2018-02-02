import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevampingComponent } from './revamping.component';

describe('RevampingComponent', () => {
  let component: RevampingComponent;
  let fixture: ComponentFixture<RevampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
