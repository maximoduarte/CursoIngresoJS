/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
   let numUno;
   let numDos;
   let numUnotexto;
   let numDostexto;
   let mensaje;
   
   numUnotexto = document.getElementById("txtIdNumeroUno").value;
   numDostexto = document.getElementById("txtIdNumeroDos").value;

   numUno =parseInt(numUnotexto);
   numDos =parseInt(numDostexto);
   mensajes ="la suma es" + (numUno + numDos);

   alert(mensajes);




}
