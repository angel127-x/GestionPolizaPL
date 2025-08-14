import { FormControl, FormGroup } from "@angular/forms";

export interface DireccionForm {
    idDireccion: FormControl<number>
    calle: FormControl<string>
    numeroInterior: FormControl<string>
    numeroExterior: FormControl<string>
    colonia: FormGroup<ColoniaForm>
}

export interface ColoniaForm {
    idColonia: FormControl<number>
    nombreColonia: FormControl<string>
    codigoPostal: FormControl<string>
    municipio: FormGroup<MunicipioForm>
}

export interface MunicipioForm {
    idMunicipio: FormControl<number>
    nombreMunicipio: FormControl<string>
    estado: FormGroup<EstadoForm>
}

export interface EstadoForm {
    idEstado: FormControl<number>
    nombreEstado: FormControl<string>
    pais: FormGroup<PaisForm>
}

export interface PaisForm {
    idPais: FormControl<number>
    nombrePais: FormControl<string>
}