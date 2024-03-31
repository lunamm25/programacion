class Pantalones{
    tipo = ``;
    talla = 0;
    material = ``;
    color = ``;
}
azul = 0;
rojo = 0;
rosado = 0;
blanco = 0;
negro = 0;
const pantanlon1 = new Pantalones();
pantanlon1.tipo = `skinny`;
pantanlon1.talla = 6;
pantanlon1.material = `denim`;
pantanlon1.color = `azul`;
azul++;

const pantanlon2 = new Pantalones();
pantanlon2.tipo = `wide leg`;
pantanlon2.talla = 8;
pantanlon2.material = `algodon`;
pantanlon2.color = `blanco`;
blanco++;
const pantanlon3 = new Pantalones();
pantanlon3.tipo = `skinny`;
pantanlon3.talla = 10;
pantanlon3.material = `denim`;
pantanlon3.color = `azul`;
azul++;

const pantanlon4 = new Pantalones();
pantanlon4.tipo = `wide leg`;
pantanlon4.talla = 8;
pantanlon4.material = `pana`;
pantanlon4.color = `rosado`;
rosado++;

const pantanlon5 = new Pantalones();
pantanlon5.tipo = `skinny`;
pantanlon5.talla = 8;
pantanlon5.material = `denim`;
pantanlon5.color = `azul`;
azul++;
const pantanlon6 = new Pantalones();
pantanlon6.tipo = `flare`;
pantanlon6.talla = 14;
pantanlon6.material = `licra`;
pantanlon6.color = `negro`;
negro++;
const pantanlon7 = new Pantalones();
pantanlon7.tipo = `skinny`;
pantanlon7.talla = 6;
pantanlon7.material = `denim`;
pantanlon7.color = `azul`;
azul++;
const pantanlon8 = new Pantalones();
pantanlon8.tipo = `skinny`;
pantanlon8.talla = 6;
pantanlon8.material = `pana`;
pantanlon8.color = `blanco`;
blanco++;
const pantanlon9 = new Pantalones();
pantanlon9.tipo = `skinny`;
pantanlon9.talla = 10;
pantanlon9.material = `denim`;
pantanlon9.color = `negro`;
negro++;
const pantanlon10 = new Pantalones();
pantanlon10.tipo = `flare`;
pantanlon10.talla = 10;
pantanlon10.material = `licra`;
pantanlon10.color = `rojo`;
rojo++;
const pantanlon11 = new Pantalones();
pantanlon11.tipo = `wide leg`;
pantanlon11.talla = 8;
pantanlon11.material = `denim`;
pantanlon11.color = `azul`;
azul++;
const pantanlon12 = new Pantalones();
pantanlon12.tipo = `wide leg`;
pantanlon12.talla = 6;
pantanlon12.material = `algodon`;
pantanlon12.color = `negro`;
negro++;
const pantanlon13 = new Pantalones();
pantanlon13.tipo = `skinny`;
pantanlon13.talla = 16;
pantanlon13.material = `denim`;
pantanlon13.color = `negro`;
negro++;
const pantanlon14 = new Pantalones();
pantanlon14.tipo = `flare`;
pantanlon14.talla = 8;
pantanlon14.material = `denim`;
pantanlon14.color = `azul`;
azul++;
const pantanlon15 = new Pantalones();
pantanlon15.tipo = `flare`;
pantanlon15.talla = 6;
pantanlon15.material = `licra`;
pantanlon15.color = `blanco`;
blanco++;

colormasrepetido= rojo;
if(blanco>colormasrepetido){
    colormasrepetido=blanco;
    console.info(`El color mas repetido es el blanco`)
}
if(azul>colormasrepetido){
    colormasrepetido=azul;
    console.info(`El color mas repetido es el azul`)
}
if(rosado>colormasrepetido){
    colormasrepetido=rosado;
    console.info(`El color mas repetido es el rosado`)
}
if(negro>colormasrepetido){
    colormasrepetido=negro;
    console.info(`El color mas repetido es el negro`)
}
else{
    console.info(`El color mas repetido es el rojo`)
}
console.info(`El color mas repetido es:${colormasrepetido}`)
let sumatalla= pantanlon1.talla+pantanlon2.talla+pantanlon3.talla+pantanlon4.talla+pantanlon5.talla+pantanlon6.talla+pantanlon7.talla+pantanlon8.talla+pantanlon9.talla+pantanlon10.talla+pantanlon11.talla+pantanlon12.talla+pantanlon13.talla+pantanlon14.talla+pantanlon15.talla;
sumatalla = parseFloat(sumatalla,10);

promediotalla = sumatalla/15;
console.info(`El promedio de las talla de los pantalones es de ${promediotalla}`)

pantalonmasgrande= pantanlon1
if(pantanlon2.talla>pantalonmasgrande.talla){
    pantalonmasgrande = pantanlon2;
}
if (pantanlon3.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon3;
}
if (pantanlon4.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon4;
}

if (pantanlon5.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon5;
}
if (pantanlon6.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon6;
}
if (pantanlon7.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon7;
}
if (pantanlon8.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon8;
}
if (pantanlon9.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon9;
}
if (pantanlon10.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon10;
}
if (pantanlon11.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon11;
}
if (pantanlon12.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon12;
}
if (pantanlon13.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon13;
}
if (pantanlon14.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon14;
}
if (pantanlon15.talla>pantalonmasgrande.talla){
    pantalonmasgrande=pantanlon15;
}
console.info(`La talla del pantalon más grande es de: ${pantalonmasgrande.talla}`)







