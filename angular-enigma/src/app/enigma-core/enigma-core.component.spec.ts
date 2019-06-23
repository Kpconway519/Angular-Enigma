import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmaCoreComponent } from './enigma-core.component';

describe('EnigmaCoreComponent', () => {
  let component: EnigmaCoreComponent;
  let fixture: ComponentFixture<EnigmaCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnigmaCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmaCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
