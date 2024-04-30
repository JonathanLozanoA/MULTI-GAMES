function iniciarJuego(){
    let botonPokemonJugador = document.getElementById("boton-seleccionar");
    botonPokemonJugador.addEventListener("clic", seleccionarPokemonJugador);
}

function seleccionarPokemonJugador(){
    let inputCharmander = document.getElementById("charmander");
    let inputBulbasaur = document.getElementById("bulbasaur");
    let inputSquirtle = document.getElementById("squirtle");
    let inputPikachu = document.getElementById("pikachu");
    let spanPokemonJugador = document.getElementById("pokemon-jugador");

    if(inputCharmander.checked){
        alert("SELECCIONASTE A CHARMANDER 🔥");
        spanPokemonJugador.innerHTML = "CHARMANDER 🔥";
    } else if(inputBulbasaur.checked){
        alert("SELECCIONASTE A BULBASAUR 🌱");
        spanPokemonJugador.innerHTML = "BULBASAUR 🌱";   
    } else if(inputSquirtle.checked){
        alert("SELECCIONASTE A SQUIRTLE 💧");
        spanPokemonJugador.innerHTML = "SQUIRTLE 💧";   
    } else if(inputPikachu.checked){
        alert("SELECCIONASTE A PIKACHU ⚡"); 
        spanPokemonJugador.innerHTML = "PIKACHU ⚡";   
    } else {
        alert("NO HAS SELECCIONADO UN POKÉMON");
    } 

    function numeroAleatorio(min , max) {
        return Math.floor(Math.random()*(max-min+1)+1);
    }
    seleccionarPokemonPc();
        let ataqueAleatorio = numeroAleatorio(1, 4);
        let spanPokemonPc = document.getElementById("pokemon-pc");

        if(ataqueAleatorio == 1) {
        alert("EL PC ELIGIÓ A CHARMANDER 🔥");
        spanPokemonPc.innerHTML = "CHARMANDER 🔥";
        } else if(ataqueAleatorio == 2) {
            alert("EL PC ELIGIÓ A BULBASAUR 🌱");
            spanPokemonPc.innerHTML = "BULBASAUR 🌱";
        } else if(ataqueAleatorio == 3) {
            alert("EL PC ELIGIÓ A SQUIRTLE 💧");
            spanPokemonPc.innerHTML = "SQUIRTLE 💧";
        } else {
            alert("EL PC ELIGIÓ A PIKACHU ⚡");
            spanPokemonPc.innerHTML = "PIKACHU ⚡";
        }
    }

let botonSeleccionar = document.getElementById("boton-seleccionar");
botonSeleccionar.addEventListener("click", seleccionarPokemonJugador);

function seleccionarPokemonPc (){}

window.addEventListener("load", iniciarJuego);