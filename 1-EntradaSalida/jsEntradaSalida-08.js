/*maximo duarte
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
		let dividiendo;
		let divisor;
		let resultado;
		
		
		dividiendo = document.getElementById("txtIdNumeroDividendo").value;
		divisor = document.getElementById("txtIdNumeroDivisor").value;
		
        dividiendo = parseInt(dividiendo)
		divisor=parseInt(divisor)

		resultado=  dividiendo % divisor;
		alert(" el resto es " + resultado);
	 
	 
	 
	 
	 
}
