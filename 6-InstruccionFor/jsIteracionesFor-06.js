//maximo duarte
function mostrar()
{
	let numero;
	let contadorPares;


	numero= parseInt(prompt("ingrese un numero"));


	for(let i= 1 ; i<= numero ; i++)
	{
		if(numero % i == 0)
		{
			contadorPares++;
			console.log(i)
		}

	console.log("pares encontrados" + contadorPares);
	}
}


//FIN DE LA FUNCIÓN