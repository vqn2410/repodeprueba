// Validación de Usuarios

const Usuarios = [
    {nombre: "Juan", edad: 30, aceptoTerminos:true, tipoDeUsuario:"Docente"},
    {nombre: "Pedro", edad: 25, aceptoTerminos:true, tipoDeUsuario:"Docente"},
    {nombre: "Rodrigo", edad: 24, aceptoTerminos:false, tipoDeUsuario:"Estudiante"},
    {nombre: "Juana", edad: 15,aceptoTerminos:true, tipoDeUsuario:"No registrado"}

]

for(let i = 0; i < Usuarios.length; i++) {
    if(Usuarios [i].edad >= 18 && Usuarios[i].aceptoTerminos && Usuarios[i].tipoDeUsuario) {
        console.log(Usuarios[i].nombre)

    }
}