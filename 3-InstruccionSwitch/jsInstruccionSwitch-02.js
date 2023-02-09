//maximo duarte
function mostrar()
{
	//tomo el mes
	let mesDelAño;
    let mensaje;

	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Julio":
		case"Agosto":
		    mensaje="Abrigate que hace frio.";
		break;
		
		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
		    mensaje="ya pasamos el frio, ahora calor.";
		break;
        
		default:
			mensaje="falta para invierno";
    }

    alert(mensaje);
    







}//FIN DE LA FUNCIÓN