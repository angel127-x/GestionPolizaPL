import { Usuario } from "./usuario"

export interface Direccion {
    calle: string
    numeroInterior: string
    numeroExterior: string
    usuario: Usuario
    colonia: Colonia
}

export interface Colonia {
    idColonia: number
    nombre: string
    codigoPostal: string
    municipio: Municipio
}

export interface Municipio {
    idMunicipio: number
    nombre: string
    estado: Estado
}

export interface Estado {
    idEstado: number
    nombre: string
    pais: Pais
}

export interface Pais {
    idPais: number
    nombre: string
}