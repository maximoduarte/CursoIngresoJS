/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	let numUno;
	let numDos;
	let resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

    numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	resultado= (numUno + numDos);
	alert( resultado);

      


}

function restar()
{   let numUno;
	let numDos;
	let resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

    numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	resultado= (numUno - numDos);
	alert( resultado);

      
	
}

function multiplicar()
{ let numUno;
	let numDos;
	let resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

    numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	resultado= (numUno * numDos);
	alert( resultado);
	
}

function dividir()
{
	let numUno;
	let numDos;
	let resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;

    numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	resultado= (numUno % numDos);
	alert( resultado);
}

