/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero=parseInt(numero);
	numero=prompt("ingrese un numero del 0 al 9.");

	while(numero <0 || numero > 9){
		numero=prompt("Error:ingrese un numero entre el 0 y el 9");
		numero=parseInt(numero);
		
	}
	document.getElementById("txtIdNumero").value = numero;	
}//FIN DE LA FUNCIÓN