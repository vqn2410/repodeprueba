// VARIABLE STRING

let  Client_Name

Client_Name = "Nicolas"

//VARIABLE NUMBER

let client_number

client_number = 43797089



//VARIANTE BOOLIANG

let esEstudiante

esEstudiante=true

let esDocente

esDocente=false

let esFamilia

esFamilia=false

;

//if (esEstudiante = false) {
//  alert ("Inicio de Sesión exitoso" + " " + Client_Name)
//} else {
//   alert ("Usted ingreso con un usuario de")
//}



let edad = 24

let acceso = (edad >= 18) && (edad <= 30);
console.log(acceso); // true si la edad está entre 18 y 30

//if (edad >= 18) {
  //alert ("Permiso Concedido" + " " + Client_Name)
//} else {
  // alert ("Usuario restringido")
//}


let calificacion = 75;
console.log("Calificación:", calificacion)
if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 70) {
    console.log("Bueno");
} else {
    console.log("Necesitas estudiar más");
}

console.log("Número de Cliente", client_number);
console.log ("Nombre de Cliente", Client_Name);

console.log("Estudiante",esEstudiante);
console.log("Docente",esDocente)
console.log("Familia",esFamilia)
console.log("Edad",edad)




let temperatura = 35;
console.log("Temperatura", temperatura)
let advertencia = (temperatura < 1) || (temperatura > 32);
console.log(advertencia); // true si la temperatura es menor que 0 o mayor que 32

