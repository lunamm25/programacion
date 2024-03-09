/*dada la edad de una persona definir si es mayor de edad.*/
const readlineSync = require(`readline-sync`);

let esEdadInvalida = false;

while(esEdadInvalida == false){

    do
    {
        let edad = readlineSync.question(`Ingrese la edad de la persona: `);

        edad = parseFloat(edad, 10);
        if(isNaN(edad)){
            console.error(`La edad ingresada no es un valor numerico`);
            esEdadInvalida = true;    
        }
        else 
        {
            if(edad<=0){
                console.error(`La edad no puede ser negativa`);
                esEdadInvalida = true;
            }
            else{
                console.info(`La persona NO puede ingresar`);
            }
        }
    }while (esEdadInvalida == true);
    console.info(`Fin del programa`);
}





