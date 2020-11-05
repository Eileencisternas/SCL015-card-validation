const validator = {
  // ...

  isValid: function (creditCardNumber) {
    //largo tc es igual al numero de la tarjeta de credito dada por el usuario
    let largo = creditCardNumber.length;
    //posicion par (2 posicion de cada numero) del largo de tc
    let posicion_par = largo % 2;
    //declaro variable suma con valor 0
    let suma = 0;
    let digitoactual;
    //uso un for para recorrer el largo de un valor ingresado desde el fin a un inicio, por ende el contador i se decrementa en 1 en cada ciclo
    for (let i = largo - 1; i >= 0; i--) {
      //con chartAt devuelvo el caracter en el lugar que le indico(i)y lo transformo a numero
      digitoactual = parseInt(creditCardNumber.charAt(i), 10);
      
      //si la posicion es par multiplico digito actual por 2
      if (i % 2 == posicion_par) {
        digitoactual *= 2;
       // console.log(digitoactual);
      }
      //si el digito actual es mayor a 9, al digito actual le resto 9
      if (digitoactual > 9) {
        digitoactual -= 9;
      }
      //en la variable suma acumulo el digito actual
      suma += digitoactual;
    }
    // el resto de suma dividido 10 debe ser 0 para ser una tc valida
    //console.log(suma);
    return (suma % 10)==0;
  },

  maskify: function (creditCardNumber) {
    //si el largo de la tarjeta es menor a 6 caracteres devuelvo el mismo numero ingresado
    if (creditCardNumber.length < 6) return creditCardNumber;
    //almaceno los ultimos 4 digitos
    let ultimos4digitos = creditCardNumber.substr(-4);
    //tomo todos los caracteres a excepcion de los ultimos 4 digitos
    let caracteresaremplazar = creditCardNumber.substr(0,creditCardNumber.length - 4);
    //tomo los numeros anteriores distintos de los ultimos 4 y los reemplazo por #
    let ocultarcaracter = caracteresaremplazar.replace(/\w/g, "#");
    //y por ultimo retorno la union de los caracteres de la variable ocultar caracteres y los ultimos 4 digitos
    return `${ocultarcaracter}${ultimos4digitos}`;
  },
};

export default validator;
