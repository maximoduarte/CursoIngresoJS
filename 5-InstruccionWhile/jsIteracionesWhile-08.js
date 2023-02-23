/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
//maximo duarte
function mostrar()
{
    let respuesta;
    let sumaPositivos; 
    let multiplicadorNegativos;
    let downflag ;
    let numeroIngresado;
    
    respuesta = "si";
    multiplicadorNegativos =1;
	downflag =true;
    sumaPositivos =0;

    while(respuesta=="si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
	    {	
			numeroIngresado= prompt("error, ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		
	    }
		    if(numeroIngresado >= 0)
             {
            sumaPositivos += numeroIngresado;
             }
        else
        {
            if(downflag== true){
                multiplicadorNegativos = numeroIngresado;
                downflag= false;
        }else{
        
            multiplicadorNegativos*= numeroIngresado;
        }    
        }      
     respuesta= prompt( "quieres seguir? si/no");
        
    }    	
   document.getElementById("txtIdSuma").value =sumaPositivos;
   document.getElementById("txtIdProducto").value =multiplicadorNegativos;

}//FIN DE LA FUNCIÓN