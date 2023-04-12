//Objeto de manera manual
var automovil = {
    marca: "Chevrolet",
    modelo: "Cativa",
    annio: 2015,
    infoAuto: function() {
        console.log("Marca Auto " + this.marca);
    }
};

automovil.annio;


//Función constructora

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
};


var autoNuevo = new auto("Renault","Sandero",2020);

autoNuevo;

//RETO
var autos = [];
for(let i = 0 ; i < 3 ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto (marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}

