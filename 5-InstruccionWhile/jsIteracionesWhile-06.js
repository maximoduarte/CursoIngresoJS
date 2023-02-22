//maximo duarte
function mostrar()
{
	let acumulador;
	let numero;
	let i;
	let promedio;
	

	i=0;
	acumulador= 0 ;

	while(i < 5){
		numero=parseInt(prompt(" ingrese un numero:"));
		acumulador = acumulador + numero;
		i= i +1;
	    promedio = acumulador / 5;
	}

	

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;



	
}//FIN DE LA FUNCIÓN