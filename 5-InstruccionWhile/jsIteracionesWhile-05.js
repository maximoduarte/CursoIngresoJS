/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	
	sexo= prompt("¿eres sexo f o m ");

	while(!(sexo == "f" || sexo =="m")){
		sexo=prompt("Error: ingrese f o m");
	}

	document.getElementById("txtIdSexo").value = sexo;



	
}//FIN DE LA FUNCIÓN