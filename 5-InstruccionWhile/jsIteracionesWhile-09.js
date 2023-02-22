/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
//maximo duarte
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables  
	banderaDelPrimero= true;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{	
			numeroIngresado= prompt("error, ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		
		}
		if(banderaDelPrimero == true) 
		{						10
			numeroMaximo= numeroIngresado;
			numeroMinimo= numeroIngresado;
			banderaDelPrimero = false; // para que no vuleva a entrar
		}else if(numeroMaximo < numeroIngresado) 
		{						9
			numeroMaximo = numeroIngresado;
		}else if(numeroMinimo > numeroIngresado)
		{
			numeroMinimo = numeroIngresado;
		}
			respuesta= prompt("quieres seguir? si/ no")
 	}	
	 document.getElementById("txtIdMaximo").value =numeroMaximo;
	 document.getElementById("txtIdMinimo").value =numeroMinimo;
}//FIN DE LA FUNCIÓN