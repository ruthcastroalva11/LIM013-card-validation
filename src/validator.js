const validator = {
  // ...

  isValid: function (creditCardNumber) {
    let cadena = creditCardNumber.toString();
    let longitud = cadena.length;
    let cifra = null;
    let cifra_cad = null;
    let suma = 0;
    for (var i = 0; i < longitud; i += 2) {
      cifra = parseInt(cadena.charAt(i)) * 2;
      if (cifra > 9) {
        cifra_cad = cifra.toString();
        cifra = parseInt(cifra_cad.charAt(0)) +
          parseInt(cifra_cad.charAt(1));
      }
      suma += cifra;
    }
    for (var i = 1; i < longitud; i += 2) {
      suma += parseInt(cadena.charAt(i));
    }

    if ((suma % 10) == 0) {
      return true;
    } else {
      return false
    }
  }

, maskify: function (creditCardNumber) {
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
