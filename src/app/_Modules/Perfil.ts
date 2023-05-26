export class Perfil{
    editarfoto: string
    nombre:string
    apellido:string
    contrasenaantigua:string
    contrasenanueva:string
    email:string
    telefono: number
    constructor(editarfoto:string, nombre:string, apellido:string, contrasenaantigua:string, contrasenanueva:string,email:string, telefono:number){
        this.editarfoto=editarfoto;
        this.nombre=nombre;
        this.apellido=apellido;
        this.contrasenaantigua=contrasenaantigua;
        this.contrasenanueva=contrasenanueva;
        this.email=email;
        this.telefono=telefono;
    }
}