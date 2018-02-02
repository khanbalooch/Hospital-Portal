import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmvStatementComponent } from './vmv-statement.component';

describe('VmvStatementComponent', () => {
  let component: VmvStatementComponent;
  let fixture: ComponentFixture<VmvStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmvStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmvStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
