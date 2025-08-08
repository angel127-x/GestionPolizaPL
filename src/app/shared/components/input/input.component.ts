import { Component, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent {
  control = input.required<any>()
  textoLabel = input.required<string>()

  onTouch = () => {}
  onChange = (_value: any) => {}

  writeValue(value: any){
    if(value !== this.control().value){
      this.control().setValue(value, {emitEvent: true})
    }
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn
  }

}
