//maximo duarte
function mostrar()
{
	//tomo la edad  
    let edad;
	let estadoCivil;
	let mensaje;
	 
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
    
	estadoCivil=document.getElementById("estadoCivil").value;

    if(edad< 18 && estadoCivil !="Soltero"){
       
		mensaje="es muy chiquito para no ser soltero"

	}


	

     alert(mensaje)


}//FIN DE LA FUNCIÓN