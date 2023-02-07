//maximo duarte
function mostrar()
{
	let edad;
	edad= document.getElementById("txtIdEdad").value;
	edad= parseInt(edad);

	if( edad > 17 ) {
       
      alert("sos mayor de edad");
     
	}

	else
	{

		alert("sos menor de edad");
    }
	

}//FIN DE LA FUNCIÓN