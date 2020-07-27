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
        alert("Completar todos los campos");
        return;
    }

    let message=document.getElementById("mensaje");

    if (result==true){
        message.innerHTML= "<p>" + cover + "</p>";
        //message.innerHTML= "<p>Tarjeta válida</p>";
        document.getElementById('formulario_total').style.display='none';
        document.getElementById('mensaje').style.display='block';
      } else {
      alert("El número de tarjeta no es válido. Volver a Ingresar");
}
}   

console.log(validator);
