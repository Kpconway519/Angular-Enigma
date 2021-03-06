import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugboardComponent } from './plugboard.component';

describe('PlugboardComponent', () => {
  let component: PlugboardComponent;
  let fixture: ComponentFixture<PlugboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlugboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlugboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
