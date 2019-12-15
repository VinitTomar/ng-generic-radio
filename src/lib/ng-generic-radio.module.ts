import { NgModule } from '@angular/core';
import { GenericRadioOptionComponent } from './generic-radio-option/generic-radio-option.component';
import { CommonModule } from '@angular/common';
import { SelectedStateDirective } from './directives/selected-state.directive';
import { UnSelectedStateDirective } from './directives/un-selected-state.directive';
import { GenericRadioGroupComponent } from './generic-radio-group/generic-radio-group.component';

@NgModule({
  declarations: [GenericRadioOptionComponent, SelectedStateDirective, UnSelectedStateDirective, GenericRadioGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [GenericRadioOptionComponent, SelectedStateDirective, UnSelectedStateDirective, GenericRadioGroupComponent
  ]
})
export class NgGenericRadioModule { }
