
//maximo duarte
function mostrar()
{
	//tomo la hora
	let horaDelDia;
	let mensaje;
	
	horaDelDia=document.getElementById("txtIdHora").value;
	horaDelDia=parseInt(horaDelDia);
	
    switch(horaDelDia){

		case 7:
		case 8:
		case 9:
		case 10:
		case 11:

		  mensaje="es de mañana";
		break;
	

	}
	
	alert(mensaje);
         

}//FIN DE LA FUNCIÓN