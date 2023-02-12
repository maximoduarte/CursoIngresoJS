//maximo duarte
function mostrar()
{
	let estacion;
	let destino;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				mensaje="se viaja";
			}
			else{
				mensaje="no se viaja"
			}
			break;
		
		case "Verano":
			if(destino == "Mar del plata"){
				mensaje="se viaja";	
			}
			else if(destino == "Cataratas"){
				mensaje="se viaja";
			}
			else{
				mensaje="no se viaja";
			}
			break;

		case "Otoño":
			case "Mar del plata":	
			case "Bariloche":	
			case "Cataratas":	
			case "Cordobo":	
	
				mensaje="se viaja";
			break;
		
		case "Primavera":
			if(destino != "Bariloche"){
				mensaje="se viaja";
			}
			else{
				mensaje="no se viaja";
			}
			break;	
		
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN