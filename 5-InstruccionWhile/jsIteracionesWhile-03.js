/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	clave = prompt("ingrese el número clave.");

	while(clave !="utn750"){
		clave=prompt("clave invalida, ingrese de nuevo su clave");
	}
	alert("clave valida!!!");
	
}//FIN DE LA FUNCIÓN
