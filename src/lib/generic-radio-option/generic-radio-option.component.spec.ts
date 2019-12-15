import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericRadioOptionComponent } from './generic-radio-option.component';

describe('GenericRadioOptionComponent', () => {
  let component: GenericRadioOptionComponent;
  let fixture: ComponentFixture<GenericRadioOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericRadioOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericRadioOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
