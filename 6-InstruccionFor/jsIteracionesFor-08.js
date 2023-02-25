//maximo duarte
function mostrar()
{
	let numero;
	let contadorDivisores = 0;
	


	numero= parseInt(prompt("ingrese un numero"));


	for(let i= 2 ; i< numero ; i++)
	{
		if(numero % i == 0)
		{
			contadorDivisores++;
			
		}
	}
		if (contadorDivisores != 0 || numero == 1)
		{
			alert(numero + " no es primo ");
		}
		else
		{
			alert(numero + " es primo ");
		}
	
}