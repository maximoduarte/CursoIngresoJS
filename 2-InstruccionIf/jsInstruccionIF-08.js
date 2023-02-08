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

	if(!(edad< 18 || estadoCivil !="Soltero")){
         mensaje=" es soltero y no es menor"
	}
       alert(mensaje);
}//FIN DE LA FUNCIÓN