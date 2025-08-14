import { Component, effect, forwardRef, input, output } from '@angular/core';

import { Colonia, Estado, Municipio, Pais } from '../../pages/usuario/models/direccion-datos';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export type Direccion = Colonia | Municipio |Estado | Pais

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent {
  datos = input.required<Direccion[]>()
  textSelect = input.required<string>()
  value = input<number>()
  defaultOption = input<boolean>(true)
  defaultOptionText = input<string>()

  selected = output<number>()
  internalValue: number | null = null
  disabled = false
  onChange: any = () => {}
  onTouched: any = () => {}

  constructor(){
    effect(() => {
      this.internalValue = this.value() ?? null
    })
  }

  writeValue(value: any){
    this.internalValue = value
  }
  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouched = fn
  }

  getId(direccion: Direccion){
    if('idPais' in direccion) return direccion.idPais
    if('idEstado' in direccion) return direccion.idEstado
    if('idMunicipio' in direccion) return direccion.idMunicipio
    return direccion.idColonia
  }

  onSelectionChange(event: Event): void{
    const select = event.target as HTMLSelectElement
    const value = select.value
    this.internalValue = +value
    this.onChange(this.internalValue)
    this.onTouched()
    this.selected.emit(this.internalValue)
  }
}
