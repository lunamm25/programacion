
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

sobrepesosanandres = 0;
sobrepesopereira = 0;
sobrepesomedellin = 0;
sobrepesocali = 0;
sobrepesomanizales = 0;
sobrepesobarranquilla = 0;
sobrepesobogota = 0;

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
    if(pmaleta>23){
        sobrepesosanandres++;
    }
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
            sobrepesosanandres++;
            mmujeres++;
            maletasmujeres+=pmaleta;
            console.info(`El promedio total del peso de las maletas de las mujeres es de ${maletasmujeres/mmujeres}`)
                if(pmaleta>23){ 
                sobrepesosanandres++;
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
                sobrepesosanandres++;
                adicionalmaleta=pmaleta-23;
                valormaleta=adicionalmaleta*5000 + 20000;
                console.info(`El valor a pagar por la maleta con sobrepeso es de ${valormaleta}`);
                sobrepesosanandres++;
            }

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
    if(pmaleta>23){
        sobrepesopereira++;
    }
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
                sobrepesopereira++;
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
                sobrepesopereira++;
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
    if(pmaleta>23){
        sobrepesomedellin++;
    }
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
                sobrepesomedellin++;
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
                sobrepesomedellin++;
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
    if(pmaleta>23){
        sobrepesocali++;
    }
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
                sobrepesocali++;
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
                sobrepesocali++;
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
    if(pmaleta>23){
        sobrepesomanizales++;
    }
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
                sobrepesomanizales++;
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
                sobrepesomanizales++;
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
    if(pmaleta>23){
        sobrepesobarranquilla++;
    }
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
                sobrepesobarranquilla++;
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
                sobrepesobarranquilla++;
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
    if(pmaleta>23){
        sobrepesobogota++;
    }
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
                sobrepesobogota++;
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
                sobrepesobogota++;
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

    if(sobrepesosanandres<sobrepesopereira && sobrepesosanandres<sobrepesomedellin && sobrepesosanandres<sobrepesocali && sobrepesosanandres<sobrepesomanizales && sobrepesosanandres<sobrepesobarranquilla && sobrepesosanandres<sobrepesobogota){
        console.info(`El destino con menos multas por maletas con sobrepeso fue San Andrés con un total de maletas con sobrepeso de ${sobrepesosanandres}`)
    }
    else if(sobrepesopereira<sobrepesosanandres && sobrepesopereira<sobrepesomedellin && sobrepesopereira<sobrepesocali && sobrepesopereira<sobrepesomanizales && sobrepesopereira<sobrepesobarranquilla && sobrepesopereira<sobrepesobogota){
        console.info(`El destino con menos multas por maletas con sobrepeso fue Pereira con un total de maletas con sobrepeso de ${sobrepesopereira}`)
    }
    else if(sobrepesomedellin<sobrepesopereira && sobrepesomedellin<sobrepesosanandres && sobrepesomedellin<sobrepesocali && sobrepesomedellin<sobrepesomanizales && sobrepesomedellin<sobrepesobarranquilla && sobrepesomedellin<sobrepesobogota){
        console.info(`El destino con menos multas por maletas con sobrepeso fue Medellín con un total de maletas con sobrepeso de ${sobrepesomedellin}`)
    }
    else if(sobrepesocali<sobrepesopereira && sobrepesocali<sobrepesomedellin && sobrepesocali<sobrepesosanandres && sobrepesocali<sobrepesomanizales && sobrepesocali<sobrepesobarranquilla && sobrepesocali<sobrepesobogota){
        console.info(`El destino con menos multas por maletas con sobrepeso fue Cali con un total de maletas con sobrepeso de ${sobrepesocali}`)
    }
    else if(sobrepesomanizales<sobrepesopereira && sobrepesomanizales<sobrepesomedellin && sobrepesomanizales<sobrepesosanandres && sobrepesomanizales<sobrepesocali && sobrepesomanizales<sobrepesobarranquilla && sobrepesomanizales<sobrepesobogota){
        console.info(`El destino con menos multas por maletas con sobrepeso fue Manizales con un total de maletas con sobrepeso de ${sobrepesomanizales}`)
    }
    else if(sobrepesobarranquilla<sobrepesopereira && sobrepesobarranquilla<sobrepesomedellin && sobrepesobarranquilla<sobrepesosanandres && sobrepesobarranquilla<sobrepesomanizales && sobrepesobarranquilla<sobrepesocali && sobrepesobarranquilla<sobrepesobogota){
        console.info(`El destino con menos multas por maletas con sobrepeso fue Barranquilla con un total de maletas con sobrepeso de ${sobrepesobarranquilla}`)
    }
    else if(sobrepesobogota<sobrepesopereira && sobrepesobogota<sobrepesomedellin && sobrepesobogota<sobrepesosanandres && sobrepesobogota<sobrepesomanizales && sobrepesobogota<sobrepesobarranquilla && sobrepesobogota<sobrepesocali){
       console.info(`El destino con menos multas por maletas con sobrepeso fue Bogotá con un total de maletas con sobrepeso de ${sobrepesobogota}`)
    }
 
    