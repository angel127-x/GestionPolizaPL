import { Genero } from "./genero"
import { Rol } from "./rol"

export interface Usuario {
    idUsuario: number
    nombre: string
    apellidoPaterno: string
    apellidoMaterno: string
    imagenByte: string
    correo: string
    contraseña: string
    telefono: string
    fechaDeNacimiento: string
    rol: Rol
    genero: Genero
}
