import validator from './validator.js';

//Funcionalidad para el llenado de datos
function resumenDatos(){

    let nombre = document.getElementById("owner");
    let username=nombre.value;

    if (username==='' || cvv===''){
        alert("Todos los campos son obligatorios");
        return false;
    }
}

console.log(validator);
