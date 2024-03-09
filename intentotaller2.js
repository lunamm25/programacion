const readlineSync = require(`readline-sync`);
let origeninvalido = false;
let contadorsanandres= 0;
let contadorpereira= 0;
let contadormedellin= 0;
let contadorcali= 0;
let contadormanizales= 0;
let contadorbarranquilla= 0;
let contadorbogota= 0;



let origen = readlineSync.question(`Ingrese el origen desde el que viaja el pasajero: `);
let pmaleta;
if (origen.toLowerCase == "san andres"){
    contadorsanandres++;
    pmaleta= (pmaleta, 10);
    pmaleta = console.info("Ingrese el peso de la maleta del pasajero");
    
        
}
else if(origen== "pereira"){
    contadorpereira++;
        pmaleta = (pmaleta, 10)
        pmaleta = console.info("Ingrese el peso de la maleta del pasajero");
        
}
else if(origen == "medellin"){
    contadormedellin++;
    pmaleta=(pmaleta, 10); 
    pmaleta = console.info("Ingrese el peso de la maleta del pasajero");
        
}
else if(origen == "cali"){
    contadorcali++;
    pmaleta =(pmaleta, 10); 
    pmaleta = console.info(`Ingrese el peso de la maleta del pasajero`);
        
}
else if(origen == "manizales"){
    contadormanizales++;
    pmaleta =(pmaleta, 10); 
    pmaleta = console.info(`Ingrese el peso de la maleta del pasajero`);
    
}
else if(origen == "barranquilla"){
    contadorbarranquilla++;
    pmaleta= (pmaleta, 10);
    pmaleta = console.info(`Ingrese el peso de la maleta del pasajero`);
    
}
else if(origen =="bogota"){
    contadorbogota++;
    pmaleta= (pmaleta, 10);
    pmaleta = console.info(`Ingrese el peso de la maleta del pasajero`);
    
}   
else{
console.error(`La ciudad que ingreso no esta en el sistema `); 
}

let contadorDsanandres= 0;
let contadorDpereira= 0;
let contadorDmedellin= 0;
let contadorDcali= 0;
let contadorDmanizales= 0;
let contadorDbarranquilla= 0;
let contadorDbogota= 0;

let destino = readlineSync.question(`Ingrese el destino al que viaja el pasajero: `);


    if (destino == "san andres"){
        contadorDsanandres++;
            contadorDsanandres= pmaleta + contadorDsanandres
        console.info(contadorDsanandres);
    }
    else if(destino== "pereira"){
        console.info(contadorDpereira);
    }
    else if(destino == "medellin"){
        console.info(contadorDmedellin);
    }
    else if(destino == "cali"){
       contadorDcali++;
        console.info(contadorDcali);

    }
    else if(destino == "manizales"){
        console.info(contadorDmanizales);
    }
    else if(destino == "barranquilla"){
        console.info(contadorDbarranquilla);
    }
    else if(destino =="bogota"){
        console.info(contadorDbogota);
    }   
    else{
    console.error(`La ciudad que ingreso no esta en el sistema `); 
    }


    



    if (destino == `san andres`|| destino == `pereira` || destino == `medellin` || destino == `cali` || destino == `manizales` || destino == `barranquilla` || destino ==`bogota`){
        let destino = readlineSync.question(`Ingrese el destino al que viaja: `);
         if (destino == "san andres"){
            pmaleta2 = pmaleta + pmaleta;
            console.info(pmaleta2)
        }
        else if(destino== "pereira"){
            pmaleta2 = pmaleta + pmaleta;
            console.info(pmaleta2)
        }
        else if(destino == "medellin"){
            pmaleta2 = pmaleta + pmaleta;
            console.info(pmaleta2)
        }
        else if(destino == "cali"){
            pmaleta2 = pmaleta + pmaleta;
            console.info(pmaleta2)
        }
        else if(destino == "manizales"){
            pmaleta2 = pmaleta + pmaleta;
            console.info(pmaleta2)
        }
        else if(destino == "barranquilla"){
            pmaleta2 = pmaleta + pmaleta;
            console.info(pmaleta2)
        }
        else if(destino =="bogota"){
            pmaleta2 = pmaleta + pmaleta;
            console.info(pmaleta2)
        }
        else{
    
        }
        }
            
    else{
        console.error(`La ciudad que ingreso no esta en el sistema `); 
    
    }






   

    
    
    


