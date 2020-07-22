import validator from './validator.js';

const validar=document.getElementById("validar");
validar.onclick=validar_tarjeta;

function validar_tarjeta(){
    let cardNumberid=document.getElementById("cardNumberid").value;
    let owner = document.getElementById("owner").value;
    //let fecha = document.getElementById("").value;
    let cvv = document.getElementById("cvv").value;

    let result=validator.isValid(cardNumberid);
    console.log(result);
    let cover=validator.maskify(cardNumberid);
    console.log(cover);

    if (cardNumberid==='' || owner==='' || cvv===''){
        alert("Todos los campos son obligatorios");
        return false;
    }

    if (result==true){
        alert("Tarjeta Válida");
      } else {
      alert("El número de tarjeta no es válido. Volver a Ingresar");
}
    

console.log(validator);
