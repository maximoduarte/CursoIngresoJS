//maximo duarte
function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño= document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="tiene 28 dias";
		break;

        case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
	        mensaje="tiene 30 dias";
        break;


		default:
			mensaje="tiene 31 dias";


	}

	alert(mensaje);


	
	



}//FIN DE LA FUNCIÓN