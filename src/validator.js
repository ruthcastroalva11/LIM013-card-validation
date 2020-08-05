const validator = {
  // ...

  isValid: function (creditCardNumber) {
    //let cadena = creditCardNumber.toString();
    let cadena = creditCardNumber.split("").reverse().join("");
    console.log(cadena)
    let longitud = cadena.length;
    console.log(longitud)
    let cifra = null;
    let cifra_cad = null;
    let suma = 0;

    for (var i = 1; i < longitud; i += 2) {
      cifra = parseInt(cadena.charAt(i)) * 2;
      console.log(cifra)
      if (cifra > 9) {
        cifra_cad = cifra.toString();
        cifra = parseInt(cifra_cad.charAt(0)) +
          parseInt(cifra_cad.charAt(1));
        console.log(cifra)
      }
      suma += cifra;
      console.log(suma)
    }
    for (var j = 0; j < longitud; j += 2) {
      suma += parseInt(cadena.charAt(j));
      console.log(suma)
    }

    if ((suma % 10) == 0) {
      return true;
    } else {
      return false;
    }
  }

  , maskify: function (creditCardNumber) { // creditCardNumber === '78965432'
    let longitudNumero = creditCardNumber.length;
    let result = "";
    if (longitudNumero > 4) {
      for (var i = 0; i < creditCardNumber.length; i++) {
        if (i >= creditCardNumber.length - 4) {
          result += creditCardNumber[i];
        }
        else {
          result += "#";
        }
      }
    }
    else {
      result = creditCardNumber
    }
    return result;
  }
};

export default validator;
