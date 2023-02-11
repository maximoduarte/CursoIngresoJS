//maximo duarte
function mostrar()
{
	let estacion; 
	let destino;
	const PRECIO= 1500;
	let aumento = 0 ; 
	let descuento = 0;
	let precioFinal;   

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if(destino =="Bariloche"){
			aumento= 20; 	
			}
            else if(destino == "Mar del plata"){
			descuento =20;	
			} 
			else{
			descuento =10;	
			}
        break;
		
		case "Verano":
			if(destino == "bariloche"){
			descuento= 20;	
			}
			else if(destino== "Mar del plata"){
			aumento = 20;
			}
			else{
			aumento=10;	
			}
			break;


		case "Otoño":
		case "Primavera":
			if(destino != "Cordoba"){
            aumento=10;
			}	
			break;
	}
	
	if(aumento != 0 ){
		precioFinal= PRECIO+ PRECIO * + aumento / 100;
	}
	else if(descuento != 0){
		precioFinal=PRECIO - PRECIO * descuento /100;
	}else{
		precioFinal=PRECIO;
	} 
  
	alert("precio final $" + precioFinal);
}//FIN DE LA FUNCIÓN