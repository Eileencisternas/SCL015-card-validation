const validator = {
  // ...

  isValid: function (creditCardNumber) {
    //long tc es el largo es igual al numero de la tarjeta de credito dada por el usuario
    let long = creditCardNumber.length;
    //position_even  es la posicion par (2 posicion de cada numero) del long de tc
    let position_even = long % 2;
    //declaro variable suma con valor 0
    let suma = 0;
    let currentdigit;
    //uso un for para recorrer el long de un valor ingresado desde el fin a un inicio, por ende el contador i se decrementa en 1 en cada ciclo
    for (let i = long - 1; i >= 0; i--) {
      //con chartAt devuelvo el caracter en el lugar que le indico(i)y lo transformo a numero
      currentdigit = parseInt(creditCardNumber.charAt(i), 10);
      
      //si la posicion es par multiplico current digit (digito actual por 2
      if (i % 2 == position_even) {
        currentdigit *= 2;
       // console.log(currentdigit);
      }
      //si el digito actual es mayor a 9, al digito actual le resto 9
      if (currentdigit > 9) {
        currentdigit -= 9;
      }
      //en la variable suma acumulo el digito actual
      suma += currentdigit;
    }
    // el resto de suma dividido 10 debe ser 0 para ser una tc valida
    //console.log(suma);
    return (suma % 10)==0;
  },

  maskify: function (creditCardNumber) {
    //si el long de la tarjeta es menor a 6 caracteres devuelvo el mismo numero ingresado
    if (creditCardNumber.length < 6) return creditCardNumber;
    //almaceno los ultimos 4 digitos//substr retorno una parte del string
    let last4digit = creditCardNumber.substr(-4);
    //tomo todos los caracteres a excepcion de los ultimos 4 digitos
    let replacecharacter = creditCardNumber.substr(0,creditCardNumber.length - 4);
    //tomo los numeros anteriores distintos de los ultimos 4 y los reemplazo por #
  let hidecharacter = replacecharacter.replace(/\w/g, "#");//(/\w/g) expresion regular para reemplazar todos los valores del string
    //y por ultimo retorno la union de los caracteres de la variable hidecharacter (ocultar caracteres) y los ultimos 4 digitos
    return `${hidecharacter}${last4digit}`;
  },
};

export default validator;
