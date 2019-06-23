import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRotorsComponent } from './all-rotors.component';

describe('AllRotorsComponent', () => {
  let component: AllRotorsComponent;
  let fixture: ComponentFixture<AllRotorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRotorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
