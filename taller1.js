 /*Dada la edad de una persona, determinar si es mayor de edad */

 const readlineSync = require(`readline-sync`);
 let edad = 0;

 do
 {
    let edad = readlineSync.question(`Ingrese la edad de la persona: `);
    edad = parseFloat(edad, 10);
    if(isNaN(edad)){
        console.error(`La edad ingresada no es un valor nuumérico`);

    }
    else{
        if(edad <= 0){
            console.error(`La edad ingresada no puede ser negativa`);

        }
        else{
            if(edad >=18){
                console.info(`La persona puede ingresar`);
            }
            else{
                console.info(`La persona NO puede ingresar`);
            }
        }
    }
 }
 while(isNaN(edad) || edad <=0);
 console.info(`Fin del programa`);

