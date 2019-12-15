# NgGenericRadio

Use of `NgGenericRadio` is to provide a way for frontend developers to simulate the behaviour of radio button.

To use `NgGenericRadio` we have to use `generic-radio-group` component and  inside it we need to provide `ng-generic-radio-option` with both selected and unselected state HTML.

`NgGenericRadio` is fully compatible with Angular Reactive and Template drivend forms.

## Installation

npm install --save ng-generic-radio

## Usage

1. Import `NgGenericRadioModule` in the component module where we want to use generict radio.
```
  import { NgGenericRadioModule } from 'ng-generic-radio';

  @NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgGenericRadioModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
```

2. Use `generic-radio-group` tag in html and provide `ng-generic-radio-option` both unselected and selcted state html insdie the `ng-generic-radio-option` tag. `*selectedState` directive is use for selected state and `*unSelectedState` directive is used for unselected state.

```
<ng-generic-radio-group [(ngModel)]="selectedModel">
  <ng-generic-radio-option value="option-1">
    <p *selectedState>selected option 1</p>
    <p *unSelectedState>not selected option 1</p>
  </ng-generic-radio-option><br>
  <ng-generic-radio-option value="option-2">
    <p *selectedState>selected option 2</p>
    <p *unSelectedState>not selected option 2</p>
  </ng-generic-radio-option><br>
  <ng-generic-radio-option value="option-3">
    <p *selectedState>selected option 3</p>
    <p *unSelectedState>not selected option 3</p>
  </ng-generic-radio-option>
</ng-generic-radio-group>
```

  With Reactive From :-

```
<ng-generic-radio-group [formControl]="demoFormControl">
  <ng-generic-radio-option value="option-1">
    <p *selectedState>selected option 1</p>
    <p *unSelectedState>not selected option 1</p>
  </ng-generic-radio-option><br>
  <ng-generic-radio-option value="option-2">
    <p *selectedState>selected option 2</p>
    <p *unSelectedState>not selected option 2</p>
  </ng-generic-radio-option><br>
  <ng-generic-radio-option value="option-3">
    <p *selectedState>selected option 3</p>
    <p *unSelectedState>not selected option 3</p>
  </ng-generic-radio-option>
</ng-generic-radio-group>
```

## Example
Here is the [Demo](https://stackblitz.com/edit/ng-generic-radio)



### Please have a look on these also
1. [NgGenericToggle](https://www.npmjs.com/package/ng-generic-toggle)