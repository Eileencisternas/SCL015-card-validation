import validator from "./validator.js";
//new validator
//console.log(validator);
// console.log(validator.isValid("4083952015263"));
// console.log(validator.maskify('4083952015263'));
// console.log(validator.maskify('4556364607935616'));

function tcvalidada() {
  let tc = document.getElementById("tc").value;
  if (validator.isValid(tc)) {
//mostrar y ocultar contenedor
    document.getElementById('pantalla2').style.display = "block";
    document.getElementById('pantalla1').style.display = "none";
  }
  //alerta tc invalida
  else alert("Error Tarjeta Invalida!!");
 
}

let txtbox_tc = document.getElementById("tc");
// se crea la funcionabilidad de capturar las presiones de teclado.
txtbox_tc.onkeyup = function () {
  // console.log
  // let tc = document.getElementById("tc").value;

  document.getElementById("texto_tc").innerHTML = validator.maskify(
    txtbox_tc.value
  );
};
let txtbox_nombre = document.getElementById("nombre");
// se crea la funcionabilidad de capturar las presiones de teclado, onkeyup captura una tecla
txtbox_nombre.onkeyup = function () {
  document.getElementById("texto_nombre").innerHTML = txtbox_nombre.value;
};
let txtbox_fechavenc = document.getElementById("fechavenc");
// se crea la funcionabilidad de capturar las presiones de teclado, onkeyup captura una tecla 
txtbox_fechavenc.onkeyup = function () {
  document.getElementById("texto_fechavenc").innerHTML = txtbox_fechavenc.value;
};
//boton confirmar, click tc valida
let botonconfirmar = document.getElementById("botonconfirmar");
botonconfirmar.addEventListener("click", tcvalidada);
