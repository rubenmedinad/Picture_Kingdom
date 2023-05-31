export class PerfilPrueba{
    nombre:string
    apellido:string
    contrasenaantigua:string
    email:string
    telefono: number
    constructor(nombre:string, apellido:string, contrasenaantigua:string, email:string, telefono:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.contrasenaantigua=contrasenaantigua;
        this.email=email;
        this.telefono=telefono;
    }
}