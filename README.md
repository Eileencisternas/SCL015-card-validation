# Tarjeta de crédito válida

***



## 1. Resumen del proyecto

Este proyecto esta orientado a la creación de un validador de tarjetas de crédito con el que al momento de una compra o reserva de servicio el usuario podrá validar su tarjeta de crédito. 
Cada vez que un usuario ingresa sus datos en un input este se visualizará de inmediato en la tarjeta, sin embargo a modo de proteger los datos se van ocultando los digitos ingresados, dejando visible solo los ultimos cuatro. Para ello se trabajo con el algoritmo de luhn que se detalla más abajo.

![GitHub Logo](/images/datostc.png)



***




El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)


***



## 2. Imagen final del proyecto
Fotos de prototipo final diseñado en figma. Si los datos de la tarjeta de crédito son validos, recien podrá pasar a la segunda pagia con el mensaje de validación.
![GitHub Logo](/images/figma1.png)

Segunda página de prototipo final donde se indica al cliente que su tarjeta a sido validada.
![GitHub Logo](/images/figma2.png)


***



## 3. Imagen protipo figma
Imagen del diseño en papel de la creación del prototipo.
![GitHub Logo](/images/protpapel.jpeg)


***


## 4. Feedback recibido

Dentro del feedback recibido se recomendo abarcar un público objetivo (no tan amplio) por lo que inicialmente se realizaron variadas modificaciones al prototipo inicial de figma como; imagenes, colores, datos.
Una vez términado el prototipo final y estando realizado el código se recomendo utilizar un idioma especifico idealmente inglés por lo que debí realizar cambio de idioma para hacer más uniforme su contenido.
También como opción de mejora se indico que al guardar mi repositorio en los mensajes dejara estipulado el mensaje de manera clara para saber los cambios realizados y esto facilitaría a futuro si trabajo en equipo.



***


## 5. Prototipo final web
Prototipo de diseño final operativo en la web, como quedo y se ve finalmente.
![GitHub Logo](/images/tcweb.png)