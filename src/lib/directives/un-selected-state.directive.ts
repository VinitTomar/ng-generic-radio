import { Directive, EmbeddedViewRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[unSelectedState]'
})
export class UnSelectedStateDirective {

  private _viewRef: EmbeddedViewRef<any>;

  constructor(private _templateRef: TemplateRef<any>) {
    this._viewRef = this._templateRef.createEmbeddedView(null);
  }

  get viewRef() {
    return this._templateRef.createEmbeddedView(null);
  }

}
