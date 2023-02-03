/*2. maximo duarte	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    largo= parseFloat(largo);
    ancho=parseFloat(ancho);


    perimetro = largo *2+ ancho*2; // lo que estoy haciendo es calcular el perimtro
    alambre= perimetro *3; // x3 es por las vueltas que le tengo que dar de alambre
    alert( "se necesitan comprar " + alambre + " metros de alambre ");





}
function Circulo () 
{
	let perimetro;
    let alambre;
    let radio;
    let PI = 3.14; // le damos valor a pi

    

    radio=document.getElementById("txtIdRadio").value;
    radio=parseFloat(radio);

    perimetro= 2* PI * radio; //sacamos el perimetro
    
    alambre= perimetro * 3; 

    alert( "necesitamos " + alambre + " de alambre");


    

    


}
function Materiales () 
{
	
    let largo;
    let ancho;
    let area;
    let cemento
    let cal
    

    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    largo= parseFloat(largo);
    ancho=parseFloat(ancho);


    area= largo * ancho; // esto es para sacar  la superficie
    cemento = area * 2;//
    cal= area * 3;
    
    alert("para un contrapiso de " + area + " m2 necesito comprar " + cemento + " bolsas de cemento y "+ cal + " bolsas de cal" ) 
}