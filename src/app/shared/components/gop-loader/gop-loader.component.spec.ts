import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GopLoaderComponent } from './gop-loader.component';

describe('GopLoaderComponent', () => {
  let component: GopLoaderComponent;
  let fixture: ComponentFixture<GopLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GopLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GopLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
