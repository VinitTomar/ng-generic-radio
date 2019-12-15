import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericRadioGroupComponent } from './generic-radio-group.component';

describe('GenericRadioGroupComponent', () => {
  let component: GenericRadioGroupComponent;
  let fixture: ComponentFixture<GenericRadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericRadioGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
