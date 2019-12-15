import { Input, forwardRef, Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CanDisable } from '@angular/material/core';
import { coerceBooleanProperty } from '../helpers/coerce-boolean-property';

@Component({
  selector: 'ng-generic-radio-group',
  templateUrl: './generic-radio-group.component.html',
  styleUrls: ['./generic-radio-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenericRadioGroupComponent),
      multi: true
    }
  ],
  host: {
    '[id]': 'uniqueId',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericRadioGroupComponent implements ControlValueAccessor, CanDisable {


  static nextUniqueId: number = 0;
  value: any;

  private selectedValueSubject: BehaviorSubject<any> = new BehaviorSubject('');
  get selectedValueStream() {
    return this.selectedValueSubject.asObservable();
  }

  onChange = (_: any) => { }
  onTouched = () => { }

  private isDisabled: boolean = false;

  @Input('disabled')
  set disabled(val: any) {
    this.isDisabled = coerceBooleanProperty(val);
  }

  get disabled() {
    return this.isDisabled;
  }


  @Input('id')
  uniqueId = `generic-toggle-${++GenericRadioGroupComponent.nextUniqueId}`;

  constructor() { }

  writeValue(value: any) {
    this.value = value;
    this.selectedValueSubject.next(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: any): void {
    this.disabled = isDisabled;
  }

  updateGroupValue(newValue: any) {
    if (this.disabled)
      return;

    this.value = newValue;
    this.selectedValueSubject.next(this.value);
    this.onChange(this.value);
  }


}
