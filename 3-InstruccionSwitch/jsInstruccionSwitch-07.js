//maximo duarte
function mostrar()
{
	let destino; 
	let mensaje;
	

	destino=document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			mensaje="se encuentra en el sur de Argentina."; 
			break;
		
		case "Cataratas":		
			mensaje="se encuentra en el norte de Argentina";
			break;
        
		case "Mar del plata":
			mensaje="se encuentra en el este de Argentina";
			break;

		default:
			mensaje="se encuentra en el oeste de Argentina";
			
	}
      alert(mensaje);




}//FIN DE LA FUNCIÓN