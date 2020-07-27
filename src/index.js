import validator from './validator.js';

const validar=document.getElementById("validar");
validar.onclick=validar_tarjeta;

function validar_tarjeta(){
    let cardNumberid=document.getElementById("cardNumberid").value;
    let owner = document.getElementById("ownername").value;
    //let fecha = document.getElementById("").value;
    let cvv = document.getElementById("cvv").value;

    let result=validator.isValid(cardNumberid);
    console.log(result);
    let cover=validator.maskify(cardNumberid);
    console.log(cover);

    if (cardNumberid==='' || ownername==='' || cvv===''){
        alert("Completar todos los campos");
        return;
    }

    let message=document.getElementById("mensaje");
    //let owner = document.getElementById("ownername").value;
    let message2=document.getElementById("mensaje2");
    let message3=document.getElementById("exito");
    //let owner = document.getElementById("owner").value;

    if (result==true){
        message.innerHTML= "Número de Tarjeta:  " + cover;
        message2.innerHTML= "Nombre del Titular:  " + owner;
        message3.innerHTML= "¡Muchas Gracias! " + "Tu compra ha sido realizada con éxito.";
        //message.innerHTML= "<p>Tarjeta válida</p>";
        //document.getElementById('formulario_total').style.display='none';
        document.getElementById('principal').style.display='none';
        document.getElementById('mensaje').style.display='block';
        document.getElementById('ownername').style.display='block';
        document.getElementById('exito').style.display='block';

      } else {
      alert("El número de tarjeta no es válido. Volver a Ingresar");
}
}   

console.log(validator);
