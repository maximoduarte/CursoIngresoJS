//maximo duarte
function mostrar()
{
	//tomo la edad  
	
	let edad;
	let mensaje
	edad= document.getElementById("txtIdEdad").value;
	edad= parseInt(edad);

	if(edad >=13 && edad<= 17 ){
       mensaje="sos adolescente"
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN