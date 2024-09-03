//Atravez del prompt obtenermos la palabra a evaluar
let palabraIngreso = prompt("¿Cúal es la palabra?")

//Empezamos quitando los espacios a traves del regex y luego 
//Lo volvemos un arreglo de caracteres
let caracteresPalabra = (palabraIngreso.replace(/\s+/g,"")).split("")
let mensajeResultante = ""

//La comparación sirve para solo llegar hasta uno antes 
//de la mitad del arreglo asi no consumimos más, ya que no es necesario
for(i=0;i<(caracteresPalabra.length-1)/2;i++){
    //Evaluamos el primer caracter con el ultimo del arreglo
    if(caracteresPalabra[i] != caracteresPalabra[(caracteresPalabra.length-i-1)]){
        mensajeResultante = "Losiento su palabra no es palindroma: "
        break
    }
    mensajeResultante = "Bravo su palabra es palindroma: "
}

//Mostramos el resultado y la palabra concatenada
document.querySelector("h1").textContent = mensajeResultante + palabraIngreso;