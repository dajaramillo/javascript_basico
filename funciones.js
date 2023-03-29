// Funciones declarativas

function primerFuncion() {
    return 3;
}

// Funciones de Expresión //Variables funciones

var primerFuncion = function(a,b){ //incluir parametros
    return a + b;
}

primerFuncion();

// Probar en navegador
function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}

function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}