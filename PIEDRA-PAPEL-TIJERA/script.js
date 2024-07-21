//FUNCIONES DE ELECCIÓN.
function numeroAleatorio(min , max) {
    return Math.floor(Math.random()*(max-min+1)+1);
}

function eleccion(jugada) {
    let resultado = "";
    if(jugada == 1) {
        resultado = "¡PIEDRA! ✊🏼";
    } else if(jugada == 2) {
        resultado = "¡PAPEL! 🖐🏼";
    } else if(jugada == 3) {
        resultado = "¡TIJERA! ✌🏼";
    } else {
        resultado = "OPCIÓN NO VALIDA 😐😐";
    }
    return resultado;
}

let jugador = 0;
let pc = 0;
let victorias = 0;
let derrotas = 0;
let empates = 0; 

while(victorias < 2 && derrotas < 2) {
    pc = numeroAleatorio(1,3);
    jugador = prompt("Elige 1 para piedra ✊🏼, 2 para papel 🖐🏼, 3 para tijera ✌🏼.");
  
    alert("Elegiste: " + eleccion(jugador));
    alert("El PC eligió: " + eleccion(pc));
    
    //COMBATE.
    if(jugador == pc) {
        alert("¡EMPATE! 🙄🙄");
        empates = empates + 1;
    } else if((jugador == 1 && pc == 3)||(jugador == 2 && pc == 1)||(jugador == 3 && pc == 2)) {
        alert("¡GANASTE! 🤩😁");
        victorias = victorias + 1;
    } else {
        alert("¡PERDISTE! 😞😞");
        derrotas = derrotas + 1;
    }
}
alert("GANASTE " + victorias + " VECES, PERDISTE " + derrotas + " VECES Y EMPATASTE " + empates + " VECES.");

function mostrarResultados(){
    if(victorias == 2){
        alert("¡ERES EL GANADOR! 😎🥇");
    } else if(derrotas == 2){
        alert("¡EL PC GANÓ! 💻🥇");
    } else {
        alert("ERROR 😒");
    }
}
mostrarResultados();
