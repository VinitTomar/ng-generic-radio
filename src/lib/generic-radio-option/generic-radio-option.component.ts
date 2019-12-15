import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, ViewChild, ViewContainerRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { SelectedStateDirective } from '../directives/selected-state.directive';
import { UnSelectedStateDirective } from '../directives/un-selected-state.directive';
import { GenericRadioGroupComponent } from '../generic-radio-group/generic-radio-group.component';
import { SelectedStateNotFound } from '../errors/selected-state-not-found.error';
import { UnSelectedStateNotFound } from '../errors/un-selected-state-not-found.error';

@Component({
  selector: 'ng-generic-radio-option',
  templateUrl: './generic-radio-option.component.html',
  styleUrls: ['./generic-radio-option.component.scss'],
  host: {
    '(click)': 'selectOption()',
    '[attr.tabindex]': 'disabled ? null : -1',
    '[class.generic-option-disabled]': 'disabled'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericRadioOptionComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Input()
  value: any;

  isSelected = false;

  private isDisabled = false;

  @Input('disabled')
  get disabled() {
    return this.isDisabled;
  }

  set disabled(value: boolean) {
    this.isDisabled = this.coerceBooleanProperty(value);
  }

  coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }

  @ContentChild(SelectedStateDirective, { static: true, read: SelectedStateDirective })
  private _selectedState: SelectedStateDirective;

  @ContentChild(UnSelectedStateDirective, { static: true, read: UnSelectedStateDirective })
  private _unSelectedState: UnSelectedStateDirective;

  @ViewChild('vc', { static: true, read: ViewContainerRef })
  private _viewContainerRef: ViewContainerRef;

  constructor(private _rgd: GenericRadioGroupComponent, private _chngDectRef: ChangeDetectorRef, ) { }

  ngOnInit() {
    this._rgd.selectedValueStream.subscribe((newValue: string) => {
      if (this.value == newValue) {
        this.isSelected = true;
      } else {
        this.isSelected = false;
      }
      this.updateView();
    });

    this.disabled = this.disabled || this._rgd.disabled;
  }

  ngAfterContentInit(): void {
    if (!this._selectedState) {
      throw new SelectedStateNotFound();
    }

    if (!this._unSelectedState) {
      throw new UnSelectedStateNotFound();
    }
  }

  ngAfterViewInit() {
    this.updateView();
    this._chngDectRef.detectChanges();
  }

  updateView() {
    this._viewContainerRef.detach();
    if (this.isSelected) {
      this._viewContainerRef.insert(this._selectedState.viewRef);
    } else {
      this._viewContainerRef.insert(this._unSelectedState.viewRef);
    }

    this._chngDectRef.markForCheck();
  }

  selectOption() {
    if (this.disabled)
      return;
    this._rgd.updateGroupValue(this.value);
  }

}
