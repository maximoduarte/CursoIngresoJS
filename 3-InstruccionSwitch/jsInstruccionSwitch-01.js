function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;
	
	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
    case "Enero":
	    mensaje="que comiences bien el año!!!.";
		break;
	case "Marzo" :
		mensaje= "a clases!!!.";
		break;
	case "Julio":
	    mensaje= "se vienen las clases!!!:";
		break;
    case "Diciembre":
		mensaje= "felices fiestas!!!.";
		break;

	default:
		mensaje="mes aburrido.";

	}

	alert(mensaje);



}//FIN DE LA FUNCIÓN