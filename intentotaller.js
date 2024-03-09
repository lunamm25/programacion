
const readlineSync = require(`readline-sync`);

maletasmujeres = 0;
maletashombres = 0;
mmujeres=0;
mhombres=0;

contadorsanandres= 0;
contadorpereira = 0;
contadormedellin = 0;
contadorcali = 0;
contadormanizales = 0;
contadorbarranquilla = 0;
contadorbogota = 0;

contadorMsanandres= 0;
contadorMpereira = 0;
contadorMmedellin = 0;
contadorMcali = 0;
contadorMmanizales = 0;
contadorMbarranquilla = 0;
contadorMbogota = 0;

maxsanandres = 0;
maxpereira= 0;
maxmedellin = 0;
maxcali = 0;
maxmanizales = 0;
maxbarranquilla = 0;
maxbogota = 0;

function primerpaso(){


    let origen = readlineSync.question(`Ingrese el origen desde el que viaja el pasajero: `);
    let nvuelo= readlineSync.question(`Ingrese el número de vuelo del pasajero: `);
    let pmaleta = +readlineSync.question(`Ingrese el peso de la maleta del pasajero: `);
    let destinodescuento = readlineSync.question(`Ingrese el destino con descuento: `);
    if (origen.toLowerCase() != `san andres` && origen.toLowerCase() != `pereira` && origen.toLowerCase() != `medellin` &&origen.toLowerCase() != `cali` && origen.toLowerCase() != `manizales` && origen.toLowerCase() != `barranquilla` && origen.toLowerCase() != `bogota`){
    console.error(`El origen que ingresó no es válido`)
}
else{
    let destino = readlineSync.question(`Ingrese el destino al que viaja el pasajero: `);
   
if(destino.toLowerCase() == `san andres`){
    contadorsanandres++;
    contadorMsanandres= parseFloat(contadorMsanandres,10);
    contadorMsanandres += pmaleta;
    
    if(pmaleta>maxsanandres){
        maxsanandres = pmaleta;
        console.info(`La maleta con el mayor peso en el avión a San Andrés es de ${maxsanandres}`)
    }

    console.info(`El peso de las maletas del avión a San Andrés es de ${contadorMsanandres}`)
    
    let gdueño = readlineSync.question(`Ingrese el genero del pasajero. F si es mujer o M si es hombre: `);
        if(gdueño.toLowerCase()== `f`){
            mmujeres++;
            maletasmujeres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de las mujeres es de ${maletasmujeres/mmujeres}`)
                if(pmaleta>23){ 
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
                else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}}
        else if (gdueño.toLowerCase()== `m`){
            mhombres++;
            maletashombres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de los hombres es de ${maletashombres/mhombres}`)
            if(pmaleta>23){
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}

            else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}
            }

            if (destinodescuento.toLowerCase() == `san andres`){
                descuentomaleta = valormaleta*15/100;
                totalmaleta = valormaleta - descuentomaleta
                console.info(`El destino al que va el pasajero tiene descuento en el equipaje por lo que el costo a pagar por la maleta es de ${totalmaleta}`)

            }
           
}else if(destino.toLowerCase()== `pereira`){
    contadorpereira++;
    contadorMpereira = parseFloat(contadorMpereira,10)
    contadorMpereira+= pmaleta;
    if(pmaleta>maxpereira){
        maxpereira = pmaleta;
        console.info(`La maleta con el mayor peso en el avión a Pereira es de ${maxpereira}`)
    }
    console.info(`El peso de las maletas del avión a pereira es de ${contadorMpereira}`)
    let gdueño = readlineSync.question(`Ingrese el genero del pasajero. F si es mujer o M si es hombre: `);
        if(gdueño.toLowerCase()== `f`){
            mmujeres++;
            maletasmujeres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de las mujeres es de ${maletasmujeres/mmujeres}`)
                if(pmaleta>23){ 
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
                else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}}
        else if (gdueño.toLowerCase()== `m`){
            mhombres++;
            maletashombres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de los hombres es de ${maletashombres/mhombres}`)
            if(pmaleta>23){
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
            else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}
                
            }if (destinodescuento.toLowerCase() == `pereira`){
                descuentomaleta = valormaleta*15/100;
                totalmaleta = valormaleta - descuentomaleta
                console.info(`El destino al que va el pasajero tiene descuento en el equipaje por lo que el costo a pagar por la maleta es de ${totalmaleta}`)

            }
}else if(destino.toLowerCase()== `medellin`){
    contadormedellin++;
    contadorMmedellin = parseFloat(contadorMmedellin,10);
    contadorMmedellin+= pmaleta;
    if(pmaleta>maxmedellin){
        maxmedellin = pmaleta;
        console.info(`La maleta con el mayor peso en el avión a Medellin es de ${maxmedellin}`)
    }
    console.info(`El peso de las maletas del avión a medellin es de ${contadorMmedellin}`)
    let gdueño = readlineSync.question(`Ingrese el genero del pasajero. F si es mujer o M si es hombre: `);
        if(gdueño.toLowerCase()== `f`){
            mmujeres++;
            maletasmujeres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de las mujeres es de ${maletasmujeres/mmujeres}`)
                if(pmaleta>23){ 
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
                else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}}
        else if (gdueño.toLowerCase()== `m`){
            mhombres++;
            maletashombres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de los hombres es de ${maletashombres/mhombres}`)
            if(pmaleta>23){
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
            else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}
            }if (destinodescuento.toLowerCase() == `medellin`){
                descuentomaleta = valormaleta*15/100;
                totalmaleta = valormaleta - descuentomaleta
                console.info(`El destino al que va el pasajero tiene descuento en el equipaje por lo que el costo a pagar por la maleta es de ${totalmaleta}`)

            }
}else if(destino.toLowerCase()== `cali`){
    contadorcali++;
    contadorMcali= parseFloat(contadorMcali,10);
    contadorMcali+= pmaleta;
    if(pmaleta>maxcali){
        maxcali = pmaleta;
        console.info(`La maleta con el mayor peso en el avión a Cali es de ${maxcali}`)
    }
    console.info(`El peso de las maletas del avión a Cali es de ${contadorMcali}`)
    let gdueño = readlineSync.question(`Ingrese el genero del pasajero. F si es mujer o M si es hombre: `);
        if(gdueño.toLowerCase()== `f`){
            mmujeres++;
            maletasmujeres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de las mujeres es de ${maletasmujeres/mmujeres}`)
                if(pmaleta>23){ 
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
                else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}}
        else if (gdueño.toLowerCase()== `m`){
            mhombres++;
            maletashombres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de los hombres es de ${maletashombres/mhombres}`)
            if(pmaleta>23){
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
            else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}
            }if (destinodescuento.toLowerCase() == `cali`){
                descuentomaleta = valormaleta*15/100;
                totalmaleta = valormaleta - descuentomaleta
                console.info(`El destino al que va el pasajero tiene descuento en el equipaje por lo que el costo a pagar por la maleta es de ${totalmaleta}`)

            }
}else if(destino.toLowerCase()== `manizales`){
    contadormanizales++;
    contadorMmanizales=parseFloat(contadorMmanizales,10);
    contadorMmanizales+= pmaleta;
    if(pmaleta>maxmanizales){
        maxmanizales = pmaleta;
        console.info(`La maleta con el mayor peso en el avión a Manizales es de ${maxmanizales}`)
    }
    console.info(`El peso de las maletas del avión a Manizales es de ${contadorMmanizales}`)
    let gdueño = readlineSync.question(`Ingrese el genero del pasajero. F si es mujer o M si es hombre: `);
        if(gdueño.toLowerCase()== `f`){
            mmujeres++;
            maletasmujeres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de las mujeres es de ${maletasmujeres/mmujeres}`)
                if(pmaleta>23){ 
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
                else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}}
        else if (gdueño.toLowerCase()== `m`){
            mhombres++;
            maletashombres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de los hombres es de ${maletashombres/mhombres}`)
            if(pmaleta>23){
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
            else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}
            }if (destinodescuento.toLowerCase() == `manizales`){
                descuentomaleta = valormaleta*15/100;
                totalmaleta = valormaleta - descuentomaleta
                console.info(`El destino al que va el pasajero tiene descuento en el equipaje por lo que el costo a pagar por la maleta es de ${totalmaleta}`)

            }
}else if(destino.toLowerCase()== `barranquilla`){
    contadorbarranquilla++;
    contadorMbarranquilla= parseFloat(contadorMbarranquilla,10);
    contadorMbarranquilla+= pmaleta;
    if(pmaleta>maxbarranquilla){
        maxbarranquilla = pmaleta;
        console.info(`La maleta con el mayor peso en el avión a Barranquilla es de ${maxbarranquilla}`)
    }
    console.info(`El peso de las maletas del avión a Barranquilla es de ${contadorMbarranquilla}`)
    let gdueño = readlineSync.question(`Ingrese el genero del pasajero. F si es mujer o M si es hombre: `);
        if(gdueño.toLowerCase()== `f`){
            mmujeres++;
            maletasmujeres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de las mujeres es de ${maletasmujeres/mmujeres}`)
                if(pmaleta>23){ 
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
                else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}}
        else if (gdueño.toLowerCase()== `m`){
            mhombres++;
            maletashombres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de los hombres es de ${maletashombres/mhombres}`)
            if(pmaleta>23){
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
            else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}
            }if (destinodescuento.toLowerCase() == `barranquilla`){
                descuentomaleta = valormaleta*15/100;
                totalmaleta = valormaleta - descuentomaleta
                console.info(`El destino al que va el pasajero tiene descuento en el equipaje por lo que el costo a pagar por la maleta es de ${totalmaleta}`)

            }
}else if(destino.toLowerCase()== `bogota`){
    contadorbogota++;
    contadorMbogota=parseFloat(contadorMbogota,10);
    contadorMbogota+= pmaleta;
    if(pmaleta>maxbogota){
        maxbogota = pmaleta;
        console.info(`La maleta con el mayor peso en el avión a Bogotá es de ${maxbogota}`)
    }
    console.info(`El peso de las maletas del avión a Bogotá es de ${contadorMbogota}`)
    let gdueño = readlineSync.question(`Ingrese el genero del pasajero. F si es mujer o M si es hombre: `);
        if(gdueño.toLowerCase()== `f`){
            mmujeres++;
            maletasmujeres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de las mujeres es de ${maletasmujeres/mmujeres}`)
                if(pmaleta>23){ 
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
                else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}}
        else if (gdueño.toLowerCase()== `m`){
            mhombres++;
            let pmaleta = +readlineSync.question(`Ingrese el peso de la maleta del pasajero `);
            maletashombres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de los hombres es de ${maletashombres/mhombres}`)
            if(pmaleta>23){
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);}
            else{
                valormaleta= 20000
                console.info(`El valor a pagar por la maleta es de ${valormaleta}`)}
            }if (destinodescuento.toLowerCase() == `bogota`){
                descuentomaleta = valormaleta*15/100;
                totalmaleta = valormaleta - descuentomaleta
                console.info(`El destino al que va el pasajero tiene descuento en el equipaje por lo que el costo a pagar por la maleta es de ${totalmaleta}`)

            }
}else{
    console.error(`El destino que ingresó no es válido `)
}
}




    }    let vuelosdiarios = readlineSync.question(`Ingrese el número de vuelos que se tienen para hoy: `);
    let i = 0;

while(i<vuelosdiarios){
    primerpaso();
    i++;
}
    if(contadorsanandres>contadorpereira && contadorsanandres>contadormedellin && contadorsanandres>contadorcali && contadorsanandres>contadormanizales && contadorsanandres>contadorbarranquilla && contadorsanandres>contadorbogota){
        console.info(`El destino al que mas se despacharon maletas fue San Andres con un total de maletas de ${contadorsanandres}`)
    }else if(contadorpereira>contadorsanandres && contadorpereira>contadormedellin && contadorpereira>contadorcali && contadorpereira>contadormanizales && contadorpereira>contadorbarranquilla && contadorpereira>contadorbogota){
        console.info(`El destino al que mas se despacharon maletas fue pereira con un total de maletas de ${contadorpereira}`)
    }else if(contadormedellin>contadorsanandres && contadormedellin>contadorpereira && contadormedellin>contadorcali && contadormedellin>contadormanizales && contadormedellin>contadorbarranquilla && contadormedellin>contadorbogota){
        console.info(`El destino al que mas se despacharon maletas fue medellin con un total de maletas de ${contadormedellin}`)
    }else if(contadorcali>contadorsanandres && contadorcali>contadorpereira && contadorcali>contadormedellin && contadorcali>contadormanizales && contadorcali>contadorbarranquilla && contadorcali>contadorbogota){
        console.info(`El destino al que mas se despacharon maletas fue cali con un total de maletas de ${contadorcali}`)
    }else if(contadormanizales>contadorsanandres && contadormanizales>contadorpereira && contadormanizales>contadormedellin && contadormanizales>contadorcali && contadormanizales>contadorbarranquilla && contadormanizales>contadorbogota){
        console.info(`El destino al que mas se despacharon maletas fue manizales con un total de maletas de ${contadormanizales}`)
    }else if (contadorbarranquilla>contadorsanandres && contadorbarranquilla>contadorpereira && contadorbarranquilla>contadormedellin && contadorbarranquilla>contadorcali && contadorbarranquilla>contadormanizales && contadorbarranquilla>contadorbogota){
        console.info(`El destino al que mas se despacharon maletas fue barranquilla con un total de maletas de ${contadorbarranquilla}`)
    }else if(contadorbogota>contadorsanandres && contadorbogota>contadorpereira && contadorbogota>contadormedellin && contadorbogota>contadormanizales && contadorbogota>contadorbarranquilla && contadorbogota>contadorcali){
        console.info(`El destino al que mas se despacharon maletas fue bogota con un total de maletas de ${contadorbogota}`)
    } 
 
    