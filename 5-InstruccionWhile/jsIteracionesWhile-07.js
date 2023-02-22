/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
//maximo duarte
function mostrar()
{
	let numero;
	let acumulador;
	let contador;
	let respuesta;
	let promedio;

	contador= 0;
	acumulador= 0;
	respuesta= "si";

	while(respuesta== "si"){
		numero= parseInt(prompt("ingresar un numero"));
	
	while(isNaN(numero)){
		numero=parseInt(prompt("error ingrese un numero"));
	
	}
	respuesta = prompt("¿desea ingresar otro numero? si/no");

	acumulador= acumulador +numero;
	contador= contador + 1;
	}

	promedio= acumulador/contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;



	

}//FIN DE LA FUNCIÓN