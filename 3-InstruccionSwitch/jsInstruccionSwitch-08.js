//maximo duarte
function mostrar()
{
	let destino;
    let mensaje;
    
	destino=document.getElementById("txtIdDestino").value;

	switch(destino){

    case "Bariloche":	
	case "Usuahia":	
		mensaje="hace FRIO";
		break;

    default:
		mensaje="hace CALOR";

	}
     
	alert(mensaje);

}//FIN DE LA FUNCIÓN