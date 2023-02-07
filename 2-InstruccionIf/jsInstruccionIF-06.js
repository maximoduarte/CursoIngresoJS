//maximo duarte
function mostrar()
{
	//tomo la edad  
	let edad;
	let mensaje;
	edad= document.getElementById("txtIdEdad").value;
	edad= parseInt(edad);

	if(edad >17){

    mensaje="es mayor de edad";

	
	}
	 else{
        if(edad >= 13 && edad <= 17)
	    {
	      mensaje= "es adolescente";
		}else
		{
	      mensaje=" es menor de edad";
		}
  	}	 
	
    alert(mensaje);
}

//FIN DE LA FUNCIÓN