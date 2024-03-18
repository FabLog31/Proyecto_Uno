"use strict"
/* const NombreUsuario = prompt("¿Cuál es tu nombre?")
console.log("¡Nueva entrada de info!")
if (NombreUsuario === null){
    document.write("¡Muy buen día! Te doy la bienvenida a mi página.");} else{
    switch (NombreUsuario){
        case "":
            document.write("¡Muy buen día! Te doy la bienvenida a mi página.");
            break;
        default:
            document.write("!Hola, " + NombreUsuario + "! Te doy la bienvenida a mi página.");
            break; 
    } 
} */ 
const NombreUsuario = prompt("¿Cuál es tu nombre?");

if (NombreUsuario === null || NombreUsuario === "") {
    document.getElementById("mensaje").textContent = "¡Muy buen día! Te doy la bienvenida a mi página.";
} else {
    document.getElementById("mensaje").textContent = "!Hola, " + NombreUsuario + "! Te doy la bienvenida a mi página.";
}

// Cambiar el color del texto del mensaje
document.getElementById("mensaje").style.color = "darkgoldenrod";
