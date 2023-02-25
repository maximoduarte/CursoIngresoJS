/*maximo duarte
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. x
2-Suma de los positivos. x
3-Cantidad de positivos. x 
4-Cantidad de negativos. x
5-Cantidad de ceros. x
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;
	let acumuladorNegativos;
	let contadorNegativos;
	let contadorCeros;
	let acumuladorPositivos;
	let contadorPositivos;
	let promedioPositivos;
	let promedioNegativos;
	let contadorPar;
	let diferencia;
	let respuesta;
	//declarar contadores y variables
	
	while(respuesta=="si")
	{	
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado= parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{	
			numeroIngresado= prompt("error, ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}	
		
		if(numeroIngresado < 0)
		{
			acumuladorNegativos += numeroIngresado;
			contadorNegativos = contadorNegativos + 1;
		}
		else if(numeroIngresado == 0)
		{
			contadorCeros = contadorCeros + 1;
		}
		else
		{
			acumuladorPositivos += numeroIngresado;
			contadorPositivos = contadorPositivos + 1;
		}

		if(numeroIngresado % 2 == 0)
		{
			contadorPar = contadorPar + 1;
		}	
		respuesta = prompt("desea seguir continuar? si / no")
	}
		
	if(contadorPositivos > 0)
	{
		promedioPositivos =acumuladorPositivos/contadorPositivos;
	
	}
	if(contadorNegativos > 0)
	{
		promedioNegativos =acumuladorNegativos/contadorNegativos;
	
	}
	
	diferencia = contadorNegativos - contadorPositivos;


	document.write("la suma de los negativos es" + acumuladorNegativos);
	document.write("la suma de los positivos es" + acumuladorPositivos);
	document.write("la cantidad de los positivos es" + contadorPositivos);
	document.write("la cantidad de los negativos es" + contadorNegativos);
	document.write("la cantidad de ceros es" + contadorCeros);
	document.write("la cantidad de numeros pares es" + contadorPar);
	document.write("el promedio de los positivos es" + promedioPositivos);
	document.write("el promedio de los negativos es" + promedioNegativos);
	document.write("la diferencia entre positivos y negativos es" + diferencia);

	
}


