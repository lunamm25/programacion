const readlineSync = require(`readline-sync`);
let origen = readlineSync.question(`Ingrese el origen desde el que viaja: `);

if (origen.toLowerCase != "san andres" || origen.toLowerCase != `pereira` || origen.toLowerCase != `medellin` || origen.toLowerCase != `cali` || origen.toLowerCase != `manizales` || origen.toLowerCase != `barranquilla` || origen.toLowerCase !=`bogota`){
    console.error(`El origen que ingresó no es válido`)
    }
    

