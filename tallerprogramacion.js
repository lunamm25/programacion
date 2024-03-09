const readlineSync = require(`readline-sync`);

let contadorOrigen = {
    "san andres": 0,
    "pereira": 0,
    "medellin": 0,
    "cali": 0,
    "manizales": 0,
    "barranquilla": 0,
    "bogota": 0
};
let origen = readlineSync.question(`Ingrese el origen desde el que viaja `);

if (origen.toLowerCase() in contadorOrigen) {
    // Incrementar el contador del destino
    contadorOrigen[origen.toLowerCase()]++;
} else {
    console.error(`La ciudad que ingresó no está en el sistema`);
}

let contadorDestinos = {
    "san andres": 0,
    "pereira": 0,
    "medellin": 0,
    "cali": 0,
    "manizales": 0,
    "barranquilla": 0,
    "bogota": 0
};

let destino = readlineSync.question(`Ingrese el destino al que viaja: `);
if (destino.toLowerCase() in contadorDestinos) {
    // Incrementar el contador del destino
    contadorDestinos[destino.toLowerCase()]++;
   
} else {
    console.error(`La ciudad que ingresó no está en el sistema`);
}
let contadormaletas = {
    "san andres": 0,
    "pereira": 0,
    "medellin": 0,
    "cali": 0,
    "manizales": 0,
    "barranquilla": 0,
    "bogota": 0

}

let pmaleta = readlineSync.question(`Ingrese el peso de la maleta del pasajero: `);
pmaleta = parseFloat(pmaleta, 10);
pmaleta = 0
while (pmaleta)

gdueño = readlineSync.question(`Ingrese F si el pasajero es femenino o M si el pasajero es masculino `);

// Encuentra el destino con más maletas
let destinoMaletas = Object.keys(contadorDestinos).reduce((a, b) => contadorDestinos[a] > contadorDestinos[b] ? a : b);

console.log(`El destino con más maletas es: ${destinoMaletas} con un total de ${contadorDestinos[destinoMaletas]} maletas.`);
