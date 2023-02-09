//maximo duarte
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
    let random;
	let max = 10;
	let min = 1;

	random = Math.floor(Math.random()* 10 ) + 1;  
	
	if(random >=9){
       alert(" excelente " + random);
	} else if(random >= 4){
		alert(" aprobo " + random);
	}
      else{
		alert(" vamos que la proxima se puede " + random);
	  }
		

}//FIN DE LA FUNCIÓN