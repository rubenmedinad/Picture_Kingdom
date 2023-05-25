export class Perfil{
    editarfoto: string
    nombre:string
    apellido:string
    contrasena:string
    email:string
    telefono: number
    constructor(editarfoto:string, nombre:string, apellido:string,contrasena:string, email:string, telefono:number){
        this.editarfoto=editarfoto;
        this.nombre=nombre;
        this.apellido=apellido;
        this.contrasena=contrasena;
        this.email=email;
        this.telefono=telefono;
    }
}