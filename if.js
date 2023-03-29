if (true) {
    console.log("Hola Verdadero");
} else {
    console.log("Hola Falso");
}

var edad = 18;

if (edad === 18 ) {
    console.log("Apenas eres Mayor de edad");
} else if (edad > 18) {
    console.log("Mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//Operador ternario
// condition ? true:false
var numero = 1;
var resultado = numero === 1 ? "Soy un uno" : "No soy un uno"


//Juego piedra
function jugar(val1,val2) {
    if (val2 == "Piedra" && val1 == "Papel") {
        return "Ganador";
    } else if (val2 == "Papel" && val1 == "Tijera") {
        return "Ganador";
    } else if (val2 == "Tijera" && val1 == "Piedra") {
        return "Ganador";
    } else if (val2 === val1) {
        return "Empate";
    } else {
        return "Perdedor"
    }
}

function getRandomInt() {
    var valor = Math.floor(Math.random() * 3);
    if (valor === 1){
        return "Piedra"
    } else if (valor === 2){
        return "Papel"
    } else {
        return "Tijera"
    }
  }

  var val1 = "Tijera";
var val2 = getRandomInt();
console.log("Jugador: " + val1 + " Computadora: " + val2);
jugar(val1,val2);

