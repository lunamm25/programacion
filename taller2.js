//SUPERMERCADO;
class Proteinas{
gramaje = 0;
tipoproteina = ``;
precio = 0;
unidadesallevar = 0;
}
carne = 0;
pescado = 0;
mariscos = 0;
huevo = 0;
const carne1 = new Proteinas();
carne1.gramaje = 200;
carne1.tipoproteina = `cerdo`;
carne1.precio = 7000;
carne1.unidadesallevar = 2;
carne++;
const pescado1 = new Proteinas();
pescado1.gramaje = 300;
pescado1.tipoproteina = `salmon`;
pescado1.precio = 15000;
pescado1.unidadesallevar = 1;
pescado++;
const carne2 = new Proteinas();
carne2.gramaje = 200;
carne2.tipoproteina = `res`;
carne2.precio = 9000;
carne2.unidadesallevar = 4;
carne++;
const pescado2 = new Proteinas();
pescado2.gramaje = 300;
pescado2.tipoproteina = `trucha`;
pescado2.precio = 12000;
pescado2.unidadesallevar = 3;
pescado++;
const pescado3 = new Proteinas();
pescado3.gramaje = 150;
pescado3.tipoproteina = `bagre`;
pescado3.precio = 15000;
pescado3.unidadesallevar = 6;
pescado++;
const pescado4 = new Proteinas();
pescado4.gramaje = 300;
pescado4.tipoproteina = `sierra`;
pescado4.precio = 10000;
pescado4.unidadesallevar = 2;
pescado++;
const carne3 = new Proteinas();
carne3.gramaje = 200;
carne3.tipoproteina = `pollo`;
carne3.precio = 5000;
carne3.unidadesallevar = 7;
carne++;
const huevos = new Proteinas();
huevos.gramaje = 60;
huevos.tipoproteina = `huevo`;
huevos.precio = 400;
huevos.unidadesallevar = 12;
huevo++;
const carnesfrias1 = new Proteinas();
carnesfrias1.gramaje = 100;
carnesfrias1.tipoproteina = `chorizo`;
carnesfrias1.precio = 1500;
carnesfrias1.unidadesallevar = 4;
carne++;
const carnesfrias2 = new Proteinas();
carnesfrias2.gramaje = 200;
carnesfrias2.tipoproteina = `jamon`;
carnesfrias2.precio = 4000;
carnesfrias2.unidadesallevar = 3;
carne++;
const mariscos1= new Proteinas();
mariscos1.gramaje = 400;
mariscos1.tipoproteina = `camarones`;
mariscos1.precio = 20000;
mariscos1.unidadesallevar = 2;
mariscos++;
const mariscos2= new Proteinas();
mariscos2.gramaje = 200;
mariscos2.tipoproteina = `langostinos`;
mariscos2.precio = 15000;
mariscos2.unidadesallevar = 3;
mariscos++;
const mariscos3= new Proteinas();
mariscos3.gramaje = 200;
mariscos3.tipoproteina = `palmitos`;
mariscos3.precio = 10000;
mariscos3.unidadesallevar = 4;
mariscos++;
const pescado5 = new Proteinas();
pescado5.gramaje = 250;
pescado5.tipoproteina = `tilapia`;
pescado5.precio = 10000;
pescado5.unidadesallevar = 5;
pescado++;

const pescado6 = new Proteinas();
pescado6.gramaje = 250;
pescado6.tipoproteina = `sardina`;
pescado6.precio = 5000;
pescado6.unidadesallevar = 4;
pescado++;

masrepetido = huevos;
if (mariscos>masrepetido ){
    masrepetido = mariscos;
}
if (pescado>masrepetido ){
    masrepetido = pescado;
}
if (carne>masrepetido ){
    masrepetido = carne;
}
console.info(`El tipo de producto más común en las proteinas que se lleva se repite ${masrepetido} en la compra`)

totalcompra = carne1.precio+carne2.precio+carne3.precio+carnesfrias1.precio+carnesfrias2.precio+pescado1.precio+pescado2.precio+pescado3.precio+pescado4.precio+pescado5.precio+pescado6.precio+mariscos1.precio+mariscos2.precio+mariscos3.precio+huevos.precio
console.info(`El total de la compra de las proteínas es de ${totalcompra}`)

promediocompra = totalcompra/15;
console.info(`En promedio cada producto de tipo proteinas cuesta ${promediocompra}`)

class Frutas{
color = ``;
tamaño = 0;
precio = 0;
unidadesallevar = 0;
}

rojo = 0;
amarillo = 0;
verde = 0;
blanco = 0; 
morado = 0;
naranja = 0;
const manzana = new Frutas();
manzana.color = `rojo`;
manzana.tamaño = 10;
manzana.precio = 1500;
manzana.unidadesallevar = 3;
manzanatotal = manzana.precio * manzana.unidadesallevar;
rojo++;
const manzana2 = new Frutas();
manzana2.color = `verde`;
manzana2.tamaño = 10;
manzana2.precio = 1500;
manzana2.unidadesallevar = 5;
manzana2total = manzana2.precio * manzana2.unidadesallevar;
verde++;
const mango = new Frutas();
mango.color = `amarillo`;
mango.tamaño = 15;
mango.precio = 2000;
mango.unidadesallevar = 5;
mangototal = mango.precio * mango.unidadesallevar;
amarillo++;
const mango2 = new Frutas();
mango2.color = `verde`;
mango2.tamaño = 15;
mango2.precio = 2000;
mango2.unidadesallevar = 2;
mango2total = mango2.precio * mango2.unidadesallevar;
verde++;
const banano = new Frutas();
banano.color = `amarillo`;
banano.tamaño = 25;
banano.precio = 800;
banano.unidadesallevar = 10;
bananototal = banano.precio * banano.unidadesallevar;
amarillo++;
const fresas = new Frutas();
fresas.color = `rojo`;
fresas.tamaño = 5;
fresas.precio = 400;
fresas.unidadesallevar = 12;
fresastotal = fresas.precio * fresas.unidadesallevar;
rojo++;
const piña = new Frutas();
piña.color = `amarillo`;
piña.tamaño = 30;
piña.precio = 5000;
piña.unidadesallevar = 1;
piñatotal = piña.precio * piña.unidadesallevar;
amarillo++;
const sandia = new Frutas();
sandia.color = `verde`;
sandia.tamaño = 50;
sandia.precio = 7000;
sandia.unidadesallevar = 3;
sandiatotal = sandia.precio * sandia.unidadesallevar;
verde++;
const papaya = new Frutas();
papaya.color = `naranja`;
papaya.tamaño = 40;
papaya.precio = 5000;
papaya.unidadesallevar = 3;
papayatotal = papaya.precio * papaya.unidadesallevar;
naranja++;
const uvas = new Frutas();
uvas.color = `morado`;
uvas.tamaño = 4;
uvas.precio = 100;
uvas.unidadesallevar = 20;
uvastotal = uvas.precio * uvas.unidadesallevar;
morado++;
const uvas2 = new Frutas();
uvas2.color = `verde`;
uvas2.tamaño = 4;
uvas2.precio = 100;
uvas2.unidadesallevar = 20;
uvas2total = uvas2.precio * uvas2.unidadesallevar;
verde++;
const naranjas = new Frutas();
naranjas.color = `naranja`;
naranjas.tamaño = 10;
naranjas.precio = 700;
naranjas.unidadesallevar = 60;
naranjastotal = naranjas.precio * naranjas.unidadesallevar;
naranja++;
const coco = new Frutas();
coco.color = `blanco`;
coco.tamaño = 30;
coco.precio = 5000;
coco.unidadesallevar = 2;
cocototal = coco.precio * coco.unidadesallevar;
blanco++;
const ciruelas = new Frutas();
ciruelas.color = `rojo`;
ciruelas.tamaño = 7;
ciruelas.precio = 200;
ciruelas.unidadesallevar = 20;
ciruelastotal = ciruelas.precio * ciruelas.unidadesallevar;
rojo++;
const maracuya = new Frutas();
maracuya.color = `amarillo`;
maracuya.tamaño = 10;
maracuya.precio = 500;
maracuya.unidadesallevar = 10;
maracuyatotal = maracuya.precio * maracuya.unidadesallevar;
amarillo++;

console.info(`El número de frutas verdes que se llevan es de ${verde}`);

console.info(`El precio total de las manzanas rojas es de: ${manzanatotal}, el de las manzanas verdes es de: ${manzana2total},
el de los mangos maduros es de: ${mangototal}, el de los mangos verdes es de: ${mango2total}, el de los bananos es de: ${bananototal},
el de las fresas es de: ${fresastotal}, el de la piña es de: ${piñatotal}, el de las sandías es de: ${sandiatotal}, 
el de las papayas es de: ${papayatotal}, el de las uvas es de: ${uvastotal}, el de las uvas verdes es de: ${uvas2total}, 
el de las nranjas es de: ${naranjastotal}, el de los cocos es de: ${cocototal}, el de las ciruelas es de: ${ciruelastotal}, 
y el de las maracuyas es de: ${maracuyatotal} `)

frutamenor = manzana;
if (manzana2.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = manzana2;
}
if (mango.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = mango;
}
if (mango2.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = mango2;
}
if (banano.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = banano;
}
if (fresas.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = fresas;
}
if (piña.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = piña;
}
if (sandia.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = sandia;
}
if (papaya.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = papaya;
}
if (uvas.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = uvas;
}
if (uvas2.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = uvas2;
}
if (naranjas.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = naranjas;
}
if (coco.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = coco;
}
if (ciruelas.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = ciruelas;
}
if (maracuya.unidadesallevar<frutamenor.unidadesallevar){
    frutamenor = maracuya;
}
console.info(`La fruta de la que menos unidades se llevan es de ${frutamenor.unidadesallevar} unidades`)

class Legumbres{
numerodebolsas = 0;
precio = 0;
peso = 0;
tipo = ``;
}
libra = 0;
kilo = 0;
const frijol1 = new Legumbres();
frijol1.numerodebolsas = 5;
frijol1.precio = 2000;
frijol1.peso = 500;
frijol1.tipo = `frijol riñon rojo`;
libra++;
const frijol2 = new Legumbres();
frijol2.numerodebolsas = 3;
frijol2.precio = 4000;
frijol2.peso = 1000;
frijol2.tipo = `frijol negro`;
kilo++;
const frijol3 = new Legumbres();
frijol3.numerodebolsas = 1;
frijol3.precio = 2500;
frijol3.peso = 500;
frijol3.tipo = `frijol blanco`;
libra++;
const frijol4 = new Legumbres();
frijol4.numerodebolsas = 3;
frijol4.precio = 2000;
frijol4.peso = 500;
frijol4.tipo = `frijol ojo negro`;
libra++;
const lentejas = new Legumbres();
lentejas.numerodebolsas = 4;
lentejas.precio = 3000;
lentejas.peso = 1000;
lentejas.tipo = `lentejas rojas`;
kilo++;
const lentejas2 = new Legumbres();
lentejas2.numerodebolsas = 2;
lentejas2.precio = 1500;
lentejas2.peso = 500;
lentejas2.tipo = `lentejas negras`;
libra++;
const guisantes = new Legumbres();
guisantes.numerodebolsas = 3;
guisantes.precio = 3000;
guisantes.peso = 500;
guisantes.tipo = `guisantes verdes`;
libra++;
const guisantes2 = new Legumbres();
guisantes2.numerodebolsas = 3;
guisantes2.precio = 3000;
guisantes2.peso = 500;
guisantes2.tipo = `guisantes blancos`;
libra++;
const garbanzos = new Legumbres();
garbanzos.numerodebolsas = 5;
garbanzos.precio = 3000;
garbanzos.peso = 1000;
garbanzos.tipo = `garbanzos normales`;
kilo++;
const garbanzos2 = new Legumbres();
garbanzos2.numerodebolsas = 2;
garbanzos2.precio = 3000;
garbanzos2.peso = 500;
garbanzos2.tipo = `garbanzos partidos`;
libra++;
const cacahuete = new Legumbres();
cacahuete.numerodebolsas = 2;
cacahuete.precio = 7000;
cacahuete.peso = 1000;
cacahuete.tipo = `cacahuete virginia`;    
kilo++;
const cacahuete2 = new Legumbres();
cacahuete2.numerodebolsas = 3;
cacahuete2.precio = 3500;
cacahuete2.peso = 500;
cacahuete2.tipo = `cacahuete española`;
libra++;
const cacahuete3 = new Legumbres();
cacahuete3.numerodebolsas = 5;
cacahuete3.precio = 7000;
cacahuete3.peso = 1000;
cacahuete3.tipo = `cacahuete roja tennessee`;
kilo++;
const soja = new Legumbres();
soja.numerodebolsas = 2;
soja.precio = 6000;
soja.peso = 500;
soja.tipo = `soja amarilla`;  
libra++;
const soja2 = new Legumbres();
soja2.numerodebolsas = 4;
soja2.precio = 6000;
soja2.peso = 500;
soja2.tipo = `soja negra`; 
libra++;

numeromayorbolsas = frijol1;
if (frijol2.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = frijol2
}
if (frijol3.numerodebolsas>numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = frijol3
}
if (frijol4.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = frijol4
}
if (lentejas.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = lentejas
}
if (lentejas2.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = lentejas2
}
if (guisantes.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = guisantes
}
if (guisantes2.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = guisantes2
}
if (garbanzos.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = garbanzos
}
if (garbanzos2.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = garbanzos2
}
if (cacahuete.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = cacahuete
}
if (cacahuete2.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = cacahuete2
}
if (cacahuete3.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = cacahuete3
}
if (soja.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = soja
}
if (soja2.numerodebolsas> numeromayorbolsas.numerodebolsas){
    numeromayorbolsas = soja2
}
console.info(`El número de bolsas que más se llevan de un sólo producto de las legumbres es de: ${numeromayorbolsas.numerodebolsas} `)

console.info(`Se llevan ${libra} productos de legumbres que pesan 1 libra`)
productomasbarato = frijol1;
if (frijol2.precio< productomasbarato.precio){
    productomasbarato = frijol2
}
if (frijol3.precio< productomasbarato.precio){
    productomasbarato = frijol3
}
if (frijol4.precio< productomasbarato.precio){
    productomasbarato = frijol4
}
if (lentejas.precio< productomasbarato.precio){
    productomasbarato = lentejas
}
if (lentejas2.precio< productomasbarato.precio){
    productomasbarato = lentejas2
}
if (guisantes.precio< productomasbarato.precio){
    productomasbarato = guisantes
}
if (guisantes2.precio< productomasbarato.precio){
    productomasbarato = guisantes2
}
if (garbanzos.precio< productomasbarato.precio){
    productomasbarato = garbanzos
}
if (garbanzos2.precio< productomasbarato.precio){
    productomasbarato = garbanzos2
}
if (cacahuete.precio< productomasbarato.precio){
    productomasbarato = cacahuete
}
if (cacahuete2.precio< productomasbarato.precio){
    productomasbarato = cacahuete2
}
if (cacahuete3.precio< productomasbarato.precio){
    productomasbarato = cacahuete3
}
if (soja.precio< productomasbarato.precio){
    productomasbarato = soja
}
if (soja2.precio< productomasbarato.precio){
    productomasbarato = soja2
}
console.info(`El producto más barato de las legumbres cuesta ${productomasbarato.precio}`)


class Productosaseo{
    precio = 0;
    marca = ``;
    unidadesallevar = 0;
    mililitros = 0;
}
colgate = 0;
johnson = 0;
savital = 0;
loreal = 0;
cerave = 0;
nosotras = 0;
nivea = 0;
listerine = 0;
dove = 0;
nutribela = 0;
const cremadental = new Productosaseo();
cremadental.precio = 3000;
cremadental.marca = `colgate`,
cremadental.unidadesallevar = 3;
cremadental.mililitros = 150;
mililitrocremadental = cremadental.precio / cremadental.mililitros;
console.info(`El precio por mililitro de la crema dental es de: ${mililitrocremadental}`)
colgate++;
const jabon = new Productosaseo();
jabon.precio = 5000;
jabon.marca = `johnson`
jabon.unidadesallevar = 2;
jabon.mililitros = 150;
mililitrojabon = jabon.precio / jabon.mililitros;
console.info(`El precio por mililitro del jabon es de: ${mililitrojabon}`)
johnson++;
const shampoo = new Productosaseo();
shampoo.precio = 15000;
shampoo.marca = `savital`,
shampoo.unidadesallevar = 1;
shampoo.mililitros = 300;
mililitroshampoo = shampoo.precio / shampoo.mililitros;
console.info(`El precio por mililitro del shampoo de Savital es de: ${mililitroshampoo}`)
savital++;
const shampoo2 = new Productosaseo();
shampoo2.precio = 25000;
shampoo2.marca = `loreal`
shampoo2.unidadesallevar = 1;
shampoo2.mililitros = 300;
mililitroshampoo2 = shampoo2.precio / shampoo2.mililitros;
console.info(`El precio por mililitro del shampoo de Loreal es de: ${mililitroshampoo2}`)
loreal++;
const acondicionador = new Productosaseo();
acondicionador.precio = 25000;
acondicionador.marca = `loreal`
acondicionador.unidadesallevar = 1;
acondicionador.mililitros = 300;
mililitroacondicionador = acondicionador.precio / acondicionador.mililitros;
console.info(`El precio por mililitro del acondicionador de Loreal es de: ${mililitroacondicionador}`)
loreal++;
const acondicionador2 = new Productosaseo();
acondicionador2.precio = 15000;
acondicionador2.marca = `savital`
acondicionador2.unidadesallevar = 1;
acondicionador2.mililitros = 300;
mililitroacondicionador2 = acondicionador2.precio / acondicionador2.mililitros;
console.info(`El precio por mililitro del acondicionador de Savital es de: ${mililitroacondicionador2}`)
savital++;
const jabonfacial = new Productosaseo();
jabonfacial.precio = 50000;
jabonfacial.marca = `cerave`
jabonfacial.unidadesallevar = 1;
jabonfacial.mililitros = 300;
mililitrojabonfacial = jabonfacial.precio / jabonfacial.mililitros;
console.info(`El precio por mililitro del jabon facial es de: ${mililitrojabonfacial}`)
cerave++;
const jabonintimo = new Productosaseo();
jabonintimo.precio = 15000;
jabonintimo.marca = `nosotras`
jabonintimo.unidadesallevar = 2;
jabonintimo.mililitros = 200;
mililitrojabonintimo = jabonintimo.precio / jabonintimo.mililitros;
console.info(`El precio por mililitro del jabon intimo es de: ${mililitrojabonintimo}`)
nosotras++;
const cremacorporal = new Productosaseo();
cremacorporal.precio = 30000;
cremacorporal.marca = `nivea`
cremacorporal.unidadesallevar = 1;
cremacorporal.mililitros = 400;
mililitrocremacorporal= cremacorporal.precio / cremacorporal.mililitros;
console.info(`El precio por mililitro de la crema corporal es de: ${mililitrocremacorporal}`)
nivea++;
const aceitecorporal = new Productosaseo();
aceitecorporal.precio = 13000;
aceitecorporal.marca = `johnson`
aceitecorporal.unidadesallevar = 2;
aceitecorporal.mililitros = 150;
mililitroaceitecorporal= aceitecorporal.precio / aceitecorporal.mililitros;
console.info(`El precio por mililitro del aceite corporal es de: ${mililitroaceitecorporal}`)
johnson++;
const enjuagebucal = new Productosaseo();
enjuagebucal.precio = 20000;
enjuagebucal.marca = `listerine`
enjuagebucal.unidadesallevar = 2;
enjuagebucal.mililitros = 200;
mililitroenjuagebucal= enjuagebucal.precio / enjuagebucal.mililitros;
console.info(`El precio por mililitro del enguaje bucal es de: ${mililitroenjuagebucal}`)
listerine++;
const desodorante = new Productosaseo();
desodorante.precio = 15000;
desodorante.marca = `dove`
desodorante.unidadesallevar = 2;
desodorante.mililitros = 200;
mililitrodesodorante= desodorante.precio / desodorante.mililitros;
console.info(`El precio por mililitro del desodorante es de: ${mililitrodesodorante}`)
dove++;
const cremamanos = new Productosaseo();
cremamanos.precio = 10000;
cremamanos.marca = `nivea`
cremamanos.unidadesallevar = 3;
cremamanos.mililitros = 150;
mililitrocremamanos= cremamanos.precio / cremamanos.mililitros;
console.info(`El precio por mililitro de la crema de manos es de: ${mililitrocremamanos}`)
nivea++;
const desodorantepies = new Productosaseo();
desodorantepies.precio = 20000;
desodorantepies.marca = `dove`
desodorantepies.unidadesallevar = 2;
desodorantepies.mililitros = 300;
mililitrodesodorantepies= desodorantepies.precio / desodorantepies.mililitros;
console.info(`El precio por mililitro del desodorante de pies es de: ${mililitrodesodorantepies}`)
dove++;
const mascarilla = new Productosaseo();
mascarilla.precio = 15000;
mascarilla.marca = `nutribela`
mascarilla.unidadesallevar = 3;
mascarilla.mililitros = 200;
mililitromascarilla= mascarilla.precio / mascarilla.mililitros;
console.info(`El precio por mililitro de la mascarilla es de: ${mililitromascarilla}`)
nutribela++;

if(colgate>=2){
    console.info(`Usted tiene un descuento del 15% por llevar dos o más productos de colgate`)
    if (cremadental.marca == `colgate`){
        descuento = cremadental.precio * 0.15 
        total = cremadental.precio - descuento
       }
       if (jabon.marca == `colgate`){
        descuento = jabon.precio * 0.15 
        total = jabon.precio - descuento
        console.info(`El precio con descuento del jabon es de ${total}`)
       }
       if (shampoo.marca == `colgate`){
        descuento = shampoo.precio * 0.15 
        total = shampoo.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (shampoo2.marca == `colgate`){
        descuento = shampoo2.precio * 0.15 
        total = shampoo2.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (acondicionador.marca == `colgate`){
        descuento = acondicionador.precio * 0.15 
        total = acondicionador.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (acondicionador2.marca == `colgate`){
        descuento = acondicionador2.precio * 0.15 
        total = acondicionador2.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (jabonfacial.marca == `colgate`){
        descuento = jabonfacial.precio * 0.15 
        total = jabonfacial.precio - descuento
        console.info(`El precio con descuento del jabon facial es de ${total}`)
       }
       if (jabonintimo.marca == `colgate`){
        descuento = jabonintimo.precio * 0.15 
        total = jabonintimo.precio - descuento
        console.info(`El precio con descuento del jabon intimo es de ${total}`)
       }
       if (cremacorporal.marca == `colgate`){
        descuento = cremacorporal.precio * 0.15 
        total = cremacorporal.precio - descuento
        console.info(`El precio con descuento de la crema corporal es de ${total}`)
       }
       if (aceitecorporal.marca == `colgate`){
        descuento = aceitecorporal.precio * 0.15 
        total = aceitecorporal.precio - descuento
        console.info(`El precio con descuento del aceite corporal es de ${total}`)
       }
       if (enjuagebucal.marca == `colgate`){
        descuento = enjuagebucal.precio * 0.15 
        total = enjuagebucal.precio - descuento
        console.info(`El precio con descuento del enjuague bucal es de ${total}`)
       }
       if (desodorante.marca == `colgate`){
        descuento = desodorante.precio * 0.15 
        total = desodorante.precio - descuento
        console.info(`El precio con descuento del desodorante es de ${total}`)
       }
       if (cremamanos.marca == `colgate`){
        descuento = cremamanos.precio * 0.15 
        total = cremamanos.precio - descuento
        console.info(`El precio con descuento de la crema de manos es de ${total}`)
       }
       if (desodorantepies.marca == `colgate`){
        descuento = desodorantepies.precio * 0.15 
        total = desodorantepies.precio - descuento
        console.info(`El precio con descuento del desodorante de pies es de ${total}`)
       }
       if (mascarilla.marca == `colgate`){
        descuento = mascarilla.precio * 0.15 
        total = mascarilla.precio - descuento
        console.info(`El precio con descuento de la mascarilla es de ${total}`)
       }

    console.info(`El precio del producto `)
}
if(johnson>=2){
    console.info(`Usted tiene un descuento del 15% por llevar dos o más productos de johnson`)
    if (cremadental.marca == `johnson`){
        descuento = cremadental.precio * 0.15 
        total = cremadental.precio - descuento
       }
       if (jabon.marca == `johnson`){
        descuento = jabon.precio * 0.15 
        total = jabon.precio - descuento
        console.info(`El precio con descuento del jabon es de ${total}`)
       }
       if (shampoo.marca == `johnson`){
        descuento = shampoo.precio * 0.15 
        total = shampoo.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (shampoo2.marca == `johnson`){
        descuento = shampoo2.precio * 0.15 
        total = shampoo2.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (acondicionador.marca == `johnson`){
        descuento = acondicionador.precio * 0.15 
        total = acondicionador.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (acondicionador2.marca == `johnson`){
        descuento = acondicionador2.precio * 0.15 
        total = acondicionador2.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (jabonfacial.marca == `johnson`){
        descuento = jabonfacial.precio * 0.15 
        total = jabonfacial.precio - descuento
        console.info(`El precio con descuento del jabon facial es de ${total}`)
       }
       if (jabonintimo.marca == `johnson`){
        descuento = jabonintimo.precio * 0.15 
        total = jabonintimo.precio - descuento
        console.info(`El precio con descuento del jabon intimo es de ${total}`)
       }
       if (cremacorporal.marca == `johnson`){
        descuento = cremacorporal.precio * 0.15 
        total = cremacorporal.precio - descuento
        console.info(`El precio con descuento de la crema corporal es de ${total}`)
       }
       if (aceitecorporal.marca == `johnson`){
        descuento = aceitecorporal.precio * 0.15 
        total = aceitecorporal.precio - descuento
        console.info(`El precio con descuento del aceite corporal es de ${total}`)
       }
       if (enjuagebucal.marca == `johnson`){
        descuento = enjuagebucal.precio * 0.15 
        total = enjuagebucal.precio - descuento
        console.info(`El precio con descuento del enjuague bucal es de ${total}`)
       }
       if (desodorante.marca == `johnson`){
        descuento = desodorante.precio * 0.15 
        total = desodorante.precio - descuento
        console.info(`El precio con descuento del desodorante es de ${total}`)
       }
       if (cremamanos.marca == `johnson`){
        descuento = cremamanos.precio * 0.15 
        total = cremamanos.precio - descuento
        console.info(`El precio con descuento de la crema de manos es de ${total}`)
       }
       if (desodorantepies.marca == `johnson`){
        descuento = desodorantepies.precio * 0.15 
        total = desodorantepies.precio - descuento
        console.info(`El precio con descuento del desodorante de pies es de ${total}`)
       }
       if (mascarilla.marca == `johnson`){
        descuento = mascarilla.precio * 0.15 
        total = mascarilla.precio - descuento
        console.info(`El precio con descuento de la mascarilla es de ${total}`)
       }
}
if(savital>=2){
    console.info(`Usted tiene un descuento del 15% por llevar dos o más productos de savital`)
    if (cremadental.marca == `savital`){
        descuento = cremadental.precio * 0.15 
        total = cremadental.precio - descuento
       }
       if (jabon.marca == `savital`){
        descuento = jabon.precio * 0.15 
        total = jabon.precio - descuento
        console.info(`El precio con descuento del jabon es de ${total}`)
       }
       if (shampoo.marca == `savital`){
        descuento = shampoo.precio * 0.15 
        total = shampoo.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (shampoo2.marca == `savital`){
        descuento = shampoo2.precio * 0.15 
        total = shampoo2.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (acondicionador.marca == `savital`){
        descuento = acondicionador.precio * 0.15 
        total = acondicionador.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (acondicionador2.marca == `savital`){
        descuento = acondicionador2.precio * 0.15 
        total = acondicionador2.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (jabonfacial.marca == `savital`){
        descuento = jabonfacial.precio * 0.15 
        total = jabonfacial.precio - descuento
        console.info(`El precio con descuento del jabon facial es de ${total}`)
       }
       if (jabonintimo.marca == `savital`){
        descuento = jabonintimo.precio * 0.15 
        total = jabonintimo.precio - descuento
        console.info(`El precio con descuento del jabon intimo es de ${total}`)
       }
       if (cremacorporal.marca == `savital`){
        descuento = cremacorporal.precio * 0.15 
        total = cremacorporal.precio - descuento
        console.info(`El precio con descuento de la crema corporal es de ${total}`)
       }
       if (aceitecorporal.marca == `savital`){
        descuento = aceitecorporal.precio * 0.15 
        total = aceitecorporal.precio - descuento
        console.info(`El precio con descuento del aceite corporal es de ${total}`)
       }
       if (enjuagebucal.marca == `savital`){
        descuento = enjuagebucal.precio * 0.15 
        total = enjuagebucal.precio - descuento
        console.info(`El precio con descuento del enjuague bucal es de ${total}`)
       }
       if (desodorante.marca == `savital`){
        descuento = desodorante.precio * 0.15 
        total = desodorante.precio - descuento
        console.info(`El precio con descuento del desodorante es de ${total}`)
       }
       if (cremamanos.marca == `savital`){
        descuento = cremamanos.precio * 0.15 
        total = cremamanos.precio - descuento
        console.info(`El precio con descuento de la crema de manos es de ${total}`)
       }
       if (desodorantepies.marca == `savital`){
        descuento = desodorantepies.precio * 0.15 
        total = desodorantepies.precio - descuento
        console.info(`El precio con descuento del desodorante de pies es de ${total}`)
       }
       if (mascarilla.marca == `savital`){
        descuento = mascarilla.precio * 0.15 
        total = mascarilla.precio - descuento
        console.info(`El precio con descuento de la mascarilla es de ${total}`)
       }
    
}
if(loreal>=2){
    console.info(`Usted tiene un descuento del 15% por llevar dos o más productos de loreal`)
    if (cremadental.marca == `loreal`){
        descuento = cremadental.precio * 0.15 
        total = cremadental.precio - descuento
       }
       if (jabon.marca == `loreal`){
        descuento = jabon.precio * 0.15 
        total = jabon.precio - descuento
        console.info(`El precio con descuento del jabon es de ${total}`)
       }
       if (shampoo.marca == `loreal`){
        descuento = shampoo.precio * 0.15 
        total = shampoo.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (shampoo2.marca == `loreal`){
        descuento = shampoo2.precio * 0.15 
        total = shampoo2.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (acondicionador.marca == `loreal`){
        descuento = acondicionador.precio * 0.15 
        total = acondicionador.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (acondicionador2.marca == `loreal`){
        descuento = acondicionador2.precio * 0.15 
        total = acondicionador2.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (jabonfacial.marca == `loreal`){
        descuento = jabonfacial.precio * 0.15 
        total = jabonfacial.precio - descuento
        console.info(`El precio con descuento del jabon facial es de ${total}`)
       }
       if (jabonintimo.marca == `loreal`){
        descuento = jabonintimo.precio * 0.15 
        total = jabonintimo.precio - descuento
        console.info(`El precio con descuento del jabon intimo es de ${total}`)
       }
       if (cremacorporal.marca == `loreal`){
        descuento = cremacorporal.precio * 0.15 
        total = cremacorporal.precio - descuento
        console.info(`El precio con descuento de la crema corporal es de ${total}`)
       }
       if (aceitecorporal.marca == `loreal`){
        descuento = aceitecorporal.precio * 0.15 
        total = aceitecorporal.precio - descuento
        console.info(`El precio con descuento del aceite corporal es de ${total}`)
       }
       if (enjuagebucal.marca == `loreal`){
        descuento = enjuagebucal.precio * 0.15 
        total = enjuagebucal.precio - descuento
        console.info(`El precio con descuento del enjuague bucal es de ${total}`)
       }
       if (desodorante.marca == `loreal`){
        descuento = desodorante.precio * 0.15 
        total = desodorante.precio - descuento
        console.info(`El precio con descuento del desodorante es de ${total}`)
       }
       if (cremamanos.marca == `loreal`){
        descuento = cremamanos.precio * 0.15 
        total = cremamanos.precio - descuento
        console.info(`El precio con descuento de la crema de manos es de ${total}`)
       }
       if (desodorantepies.marca == `loreal`){
        descuento = desodorantepies.precio * 0.15 
        total = desodorantepies.precio - descuento
        console.info(`El precio con descuento del desodorante de pies es de ${total}`)
       }
       if (mascarilla.marca == `loreal`){
        descuento = mascarilla.precio * 0.15 
        total = mascarilla.precio - descuento
        console.info(`El precio con descuento de la mascarilla es de ${total}`)
       }
}
if(cerave>=2){
    console.info(`Usted tiene un descuento del 15% por llevar dos o más productos de cerave`)
    if (cremadental.marca == `cerave`){
        descuento = cremadental.precio * 0.15 
        total = cremadental.precio - descuento
       }
       if (jabon.marca == `cerave`){
        descuento = jabon.precio * 0.15 
        total = jabon.precio - descuento
        console.info(`El precio con descuento del jabon es de ${total}`)
       }
       if (shampoo.marca == `cerave`){
        descuento = shampoo.precio * 0.15 
        total = shampoo.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (shampoo2.marca == `cerave`){
        descuento = shampoo2.precio * 0.15 
        total = shampoo2.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (acondicionador.marca == `cerave`){
        descuento = acondicionador.precio * 0.15 
        total = acondicionador.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (acondicionador2.marca == `cerave`){
        descuento = acondicionador2.precio * 0.15 
        total = acondicionador2.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (jabonfacial.marca == `cerave`){
        descuento = jabonfacial.precio * 0.15 
        total = jabonfacial.precio - descuento
        console.info(`El precio con descuento del jabon facial es de ${total}`)
       }
       if (jabonintimo.marca == `cerave`){
        descuento = jabonintimo.precio * 0.15 
        total = jabonintimo.precio - descuento
        console.info(`El precio con descuento del jabon intimo es de ${total}`)
       }
       if (cremacorporal.marca == `cerave`){
        descuento = cremacorporal.precio * 0.15 
        total = cremacorporal.precio - descuento
        console.info(`El precio con descuento de la crema corporal es de ${total}`)
       }
       if (aceitecorporal.marca == `cerave`){
        descuento = aceitecorporal.precio * 0.15 
        total = aceitecorporal.precio - descuento
        console.info(`El precio con descuento del aceite corporal es de ${total}`)
       }
       if (enjuagebucal.marca == `cerave`){
        descuento = enjuagebucal.precio * 0.15 
        total = enjuagebucal.precio - descuento
        console.info(`El precio con descuento del enjuague bucal es de ${total}`)
       }
       if (desodorante.marca == `cerave`){
        descuento = desodorante.precio * 0.15 
        total = desodorante.precio - descuento
        console.info(`El precio con descuento del desodorante es de ${total}`)
       }
       if (cremamanos.marca == `cerave`){
        descuento = cremamanos.precio * 0.15 
        total = cremamanos.precio - descuento
        console.info(`El precio con descuento de la crema de manos es de ${total}`)
       }
       if (desodorantepies.marca == `cerave`){
        descuento = desodorantepies.precio * 0.15 
        total = desodorantepies.precio - descuento
        console.info(`El precio con descuento del desodorante de pies es de ${total}`)
       }
       if (mascarilla.marca == `cerave`){
        descuento = mascarilla.precio * 0.15 
        total = mascarilla.precio - descuento
        console.info(`El precio con descuento de la mascarilla es de ${total}`)
       }
}
if(nosotras>=2){
    console.info(`Usted tiene un descuento del 15% por llevar dos o más productos de nosotras`)
    if (cremadental.marca == `nosotras`){
        descuento = cremadental.precio * 0.15 
        total = cremadental.precio - descuento
       }
       if (jabon.marca == `nosotras`){
        descuento = jabon.precio * 0.15 
        total = jabon.precio - descuento
        console.info(`El precio con descuento del jabon es de ${total}`)
       }
       if (shampoo.marca == `nosotras`){
        descuento = shampoo.precio * 0.15 
        total = shampoo.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (shampoo2.marca == `nosotras`){
        descuento = shampoo2.precio * 0.15 
        total = shampoo2.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (acondicionador.marca == `nosotras`){
        descuento = acondicionador.precio * 0.15 
        total = acondicionador.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (acondicionador2.marca == `nosotras`){
        descuento = acondicionador2.precio * 0.15 
        total = acondicionador2.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (jabonfacial.marca == `nosotras`){
        descuento = jabonfacial.precio * 0.15 
        total = jabonfacial.precio - descuento
        console.info(`El precio con descuento del jabon facial es de ${total}`)
       }
       if (jabonintimo.marca == `nosotras`){
        descuento = jabonintimo.precio * 0.15 
        total = jabonintimo.precio - descuento
        console.info(`El precio con descuento del jabon intimo es de ${total}`)
       }
       if (cremacorporal.marca == `nosotras`){
        descuento = cremacorporal.precio * 0.15 
        total = cremacorporal.precio - descuento
        console.info(`El precio con descuento de la crema corporal es de ${total}`)
       }
       if (aceitecorporal.marca == `nosotras`){
        descuento = aceitecorporal.precio * 0.15 
        total = aceitecorporal.precio - descuento
        console.info(`El precio con descuento del aceite corporal es de ${total}`)
       }
       if (enjuagebucal.marca == `nosotras`){
        descuento = enjuagebucal.precio * 0.15 
        total = enjuagebucal.precio - descuento
        console.info(`El precio con descuento del enjuague bucal es de ${total}`)
       }
       if (desodorante.marca == `nosotras`){
        descuento = desodorante.precio * 0.15 
        total = desodorante.precio - descuento
        console.info(`El precio con descuento del desodorante es de ${total}`)
       }
       if (cremamanos.marca == `nosotras`){
        descuento = cremamanos.precio * 0.15 
        total = cremamanos.precio - descuento
        console.info(`El precio con descuento de la crema de manos es de ${total}`)
       }
       if (desodorantepies.marca == `nosotras`){
        descuento = desodorantepies.precio * 0.15 
        total = desodorantepies.precio - descuento
        console.info(`El precio con descuento del desodorante de pies es de ${total}`)
       }
       if (mascarilla.marca == `nosotras`){
        descuento = mascarilla.precio * 0.15 
        total = mascarilla.precio - descuento
        console.info(`El precio con descuento de la mascarilla es de ${total}`)
       }
}
if(nivea>=2){
    console.info(`Usted tiene un descuento del 15% por llevar dos o más productos de nivea`)
    if (cremadental.marca == `nivea`){
        descuento = cremadental.precio * 0.15 
        total = cremadental.precio - descuento
       }
       if (jabon.marca == `nivea`){
        descuento = jabon.precio * 0.15 
        total = jabon.precio - descuento
        console.info(`El precio con descuento del jabon es de ${total}`)
       }
       if (shampoo.marca == `nivea`){
        descuento = shampoo.precio * 0.15 
        total = shampoo.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (shampoo2.marca == `nivea`){
        descuento = shampoo2.precio * 0.15 
        total = shampoo2.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (acondicionador.marca == `nivea`){
        descuento = acondicionador.precio * 0.15 
        total = acondicionador.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (acondicionador2.marca == `nivea`){
        descuento = acondicionador2.precio * 0.15 
        total = acondicionador2.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (jabonfacial.marca == `nivea`){
        descuento = jabonfacial.precio * 0.15 
        total = jabonfacial.precio - descuento
        console.info(`El precio con descuento del jabon facial es de ${total}`)
       }
       if (jabonintimo.marca == `nivea`){
        descuento = jabonintimo.precio * 0.15 
        total = jabonintimo.precio - descuento
        console.info(`El precio con descuento del jabon intimo es de ${total}`)
       }
       if (cremacorporal.marca == `nivea`){
        descuento = cremacorporal.precio * 0.15 
        total = cremacorporal.precio - descuento
        console.info(`El precio con descuento de la crema corporal es de ${total}`)
       }
       if (aceitecorporal.marca == `nivea`){
        descuento = aceitecorporal.precio * 0.15 
        total = aceitecorporal.precio - descuento
        console.info(`El precio con descuento del aceite corporal es de ${total}`)
       }
       if (enjuagebucal.marca == `nivea`){
        descuento = enjuagebucal.precio * 0.15 
        total = enjuagebucal.precio - descuento
        console.info(`El precio con descuento del enjuague bucal es de ${total}`)
       }
       if (desodorante.marca == `nivea`){
        descuento = desodorante.precio * 0.15 
        total = desodorante.precio - descuento
        console.info(`El precio con descuento del desodorante es de ${total}`)
       }
       if (cremamanos.marca == `nivea`){
        descuento = cremamanos.precio * 0.15 
        total = cremamanos.precio - descuento
        console.info(`El precio con descuento de la crema de manos es de ${total}`)
       }
       if (desodorantepies.marca == `nivea`){
        descuento = desodorantepies.precio * 0.15 
        total = desodorantepies.precio - descuento
        console.info(`El precio con descuento del desodorante de pies es de ${total}`)
       }
       if (mascarilla.marca == `nivea`){
        descuento = mascarilla.precio * 0.15 
        total = mascarilla.precio - descuento
        console.info(`El precio con descuento de la mascarilla es de ${total}`)
       }
}
if(listerine>=2){
    console.info(`Usted tiene un descuento del 15% por llevar dos o más productos de listerine`)
    if (cremadental.marca == `listerine`){
        descuento = cremadental.precio * 0.15 
        total = cremadental.precio - descuento
       }
       if (jabon.marca == `listerine`){
        descuento = jabon.precio * 0.15 
        total = jabon.precio - descuento
        console.info(`El precio con descuento del jabon es de ${total}`)
       }
       if (shampoo.marca == `listerine`){
        descuento = shampoo.precio * 0.15 
        total = shampoo.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (shampoo2.marca == `listerine`){
        descuento = shampoo2.precio * 0.15 
        total = shampoo2.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (acondicionador.marca == `listerine`){
        descuento = acondicionador.precio * 0.15 
        total = acondicionador.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (acondicionador2.marca == `listerine`){
        descuento = acondicionador2.precio * 0.15 
        total = acondicionador2.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (jabonfacial.marca == `listerine`){
        descuento = jabonfacial.precio * 0.15 
        total = jabonfacial.precio - descuento
        console.info(`El precio con descuento del jabon facial es de ${total}`)
       }
       if (jabonintimo.marca == `listerine`){
        descuento = jabonintimo.precio * 0.15 
        total = jabonintimo.precio - descuento
        console.info(`El precio con descuento del jabon intimo es de ${total}`)
       }
       if (cremacorporal.marca == `listerine`){
        descuento = cremacorporal.precio * 0.15 
        total = cremacorporal.precio - descuento
        console.info(`El precio con descuento de la crema corporal es de ${total}`)
       }
       if (aceitecorporal.marca == `listerine`){
        descuento = aceitecorporal.precio * 0.15 
        total = aceitecorporal.precio - descuento
        console.info(`El precio con descuento del aceite corporal es de ${total}`)
       }
       if (enjuagebucal.marca == `listerine`){
        descuento = enjuagebucal.precio * 0.15 
        total = enjuagebucal.precio - descuento
        console.info(`El precio con descuento del enjuague bucal es de ${total}`)
       }
       if (desodorante.marca == `listerine`){
        descuento = desodorante.precio * 0.15 
        total = desodorante.precio - descuento
        console.info(`El precio con descuento del desodorante es de ${total}`)
       }
       if (cremamanos.marca == `listerine`){
        descuento = cremamanos.precio * 0.15 
        total = cremamanos.precio - descuento
        console.info(`El precio con descuento de la crema de manos es de ${total}`)
       }
       if (desodorantepies.marca == `listerine`){
        descuento = desodorantepies.precio * 0.15 
        total = desodorantepies.precio - descuento
        console.info(`El precio con descuento del desodorante de pies es de ${total}`)
       }
       if (mascarilla.marca == `listerine`){
        descuento = mascarilla.precio * 0.15 
        total = mascarilla.precio - descuento
        console.info(`El precio con descuento de la mascarilla es de ${total}`)
       }
}
if(dove>=2){
    console.info(`Usted tiene un descuento del 15% por llevar dos o más productos de dove`)
    if (cremadental.marca == `dove`){
        descuento = cremadental.precio * 0.15 
        total = cremadental.precio - descuento
       }
       if (jabon.marca == `dove`){
        descuento = jabon.precio * 0.15 
        total = jabon.precio - descuento
        console.info(`El precio con descuento del jabon es de ${total}`)
       }
       if (shampoo.marca == `dove`){
        descuento = shampoo.precio * 0.15 
        total = shampoo.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (shampoo2.marca == `dove`){
        descuento = shampoo2.precio * 0.15 
        total = shampoo2.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (acondicionador.marca == `dove`){
        descuento = acondicionador.precio * 0.15 
        total = acondicionador.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (acondicionador2.marca == `dove`){
        descuento = acondicionador2.precio * 0.15 
        total = acondicionador2.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (jabonfacial.marca == `dove`){
        descuento = jabonfacial.precio * 0.15 
        total = jabonfacial.precio - descuento
        console.info(`El precio con descuento del jabon facial es de ${total}`)
       }
       if (jabonintimo.marca == `dove`){
        descuento = jabonintimo.precio * 0.15 
        total = jabonintimo.precio - descuento
        console.info(`El precio con descuento del jabon intimo es de ${total}`)
       }
       if (cremacorporal.marca == `dove`){
        descuento = cremacorporal.precio * 0.15 
        total = cremacorporal.precio - descuento
        console.info(`El precio con descuento de la crema corporal es de ${total}`)
       }
       if (aceitecorporal.marca == `dove`){
        descuento = aceitecorporal.precio * 0.15 
        total = aceitecorporal.precio - descuento
        console.info(`El precio con descuento del aceite corporal es de ${total}`)
       }
       if (enjuagebucal.marca == `dove`){
        descuento = enjuagebucal.precio * 0.15 
        total = enjuagebucal.precio - descuento
        console.info(`El precio con descuento del enjuague bucal es de ${total}`)
       }
       if (desodorante.marca == `dove`){
        descuento = desodorante.precio * 0.15 
        total = desodorante.precio - descuento
        console.info(`El precio con descuento del desodorante es de ${total}`)
       }
       if (cremamanos.marca == `dove`){
        descuento = cremamanos.precio * 0.15 
        total = cremamanos.precio - descuento
        console.info(`El precio con descuento de la crema de manos es de ${total}`)
       }
       if (desodorantepies.marca == `dove`){
        descuento = desodorantepies.precio * 0.15 
        total = desodorantepies.precio - descuento
        console.info(`El precio con descuento del desodorante de pies es de ${total}`)
       }
       if (mascarilla.marca == `dove`){
        descuento = mascarilla.precio * 0.15 
        total = mascarilla.precio - descuento
        console.info(`El precio con descuento de la mascarilla es de ${total}`)
       }
}
if(nutribela>=2){
    console.info(`Usted tiene un descuento del 15% por llevar dos o más productos de nutribela`)
    if (cremadental.marca == `nutribela`){
        descuento = cremadental.precio * 0.15 
        total = cremadental.precio - descuento
       }
       if (jabon.marca == `nutribela`){
        descuento = jabon.precio * 0.15 
        total = jabon.precio - descuento
        console.info(`El precio con descuento del jabon es de ${total}`)
       }
       if (shampoo.marca == `nutribela`){
        descuento = shampoo.precio * 0.15 
        total = shampoo.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (shampoo2.marca == `nutribela`){
        descuento = shampoo2.precio * 0.15 
        total = shampoo2.precio - descuento
        console.info(`El precio con descuento del shampoo es de ${total}`)
       }
       if (acondicionador.marca == `nutribela`){
        descuento = acondicionador.precio * 0.15 
        total = acondicionador.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (acondicionador2.marca == `nutribela`){
        descuento = acondicionador2.precio * 0.15 
        total = acondicionador2.precio - descuento
        console.info(`El precio con descuento del acondicionador es de ${total}`)
       }
       if (jabonfacial.marca == `nutribela`){
        descuento = jabonfacial.precio * 0.15 
        total = jabonfacial.precio - descuento
        console.info(`El precio con descuento del jabon facial es de ${total}`)
       }
       if (jabonintimo.marca == `nutribela`){
        descuento = jabonintimo.precio * 0.15 
        total = jabonintimo.precio - descuento
        console.info(`El precio con descuento del jabon intimo es de ${total}`)
       }
       if (cremacorporal.marca == `nutribela`){
        descuento = cremacorporal.precio * 0.15 
        total = cremacorporal.precio - descuento
        console.info(`El precio con descuento de la crema corporal es de ${total}`)
       }
       if (aceitecorporal.marca == `nutribela`){
        descuento = aceitecorporal.precio * 0.15 
        total = aceitecorporal.precio - descuento
        console.info(`El precio con descuento del aceite corporal es de ${total}`)
       }
       if (enjuagebucal.marca == `nutribela`){
        descuento = enjuagebucal.precio * 0.15 
        total = enjuagebucal.precio - descuento
        console.info(`El precio con descuento del enjuague bucal es de ${total}`)
       }
       if (desodorante.marca == `nutribela`){
        descuento = desodorante.precio * 0.15 
        total = desodorante.precio - descuento
        console.info(`El precio con descuento del desodorante es de ${total}`)
       }
       if (cremamanos.marca == `nutribela`){
        descuento = cremamanos.precio * 0.15 
        total = cremamanos.precio - descuento
        console.info(`El precio con descuento de la crema de manos es de ${total}`)
       }
       if (desodorantepies.marca == `nutribela`){
        descuento = desodorantepies.precio * 0.15 
        total = desodorantepies.precio - descuento
        console.info(`El precio con descuento del desodorante de pies es de ${total}`)
       }
       if (mascarilla.marca == `nutribela`){
        descuento = mascarilla.precio * 0.15 
        total = mascarilla.precio - descuento
        console.info(`El precio con descuento de la mascarilla es de ${total}`)
       }
}
class Dulces{
precio = 0;
unidadesallevar = 0
calorias = 0
sabor = ``;
}
fresa = 0;
chocolate = 0;
uva = 0;
queso = 0; 
explosionsabores = 0;
pollo = 0;
limon = 0;
mani = 0;
const gomitas = new Dulces();
gomitas.precio = 1500;
gomitas.calorias = 200
gomitas.unidadesallevar = 4;
gomitas.sabor = `fresa`;
fresa++;

const galletas = new Dulces();
galletas.precio = 1700;
galletas.calorias = 300
galletas.unidadesallevar = 2;
galletas.sabor = `chocolate`;
chocolate++;

const bombones = new Dulces();
bombones.precio = 700;
bombones.calorias = 100
bombones.unidadesallevar = 6;
bombones.sabor = `uva`;
uva++;

const chocolatinas = new Dulces();
chocolatinas.precio = 3000;
chocolatinas.calorias = 350
chocolatinas.unidadesallevar = 2;
chocolatinas.sabor = `chocolate`;
chocolate++;

const nucita = new Dulces();
nucita.precio = 800;
nucita.calorias = 100
nucita.unidadesallevar = 2;
nucita.sabor = `chocolate`;
chocolate++;

const chocorramo = new Dulces();
chocorramo.precio = 1500;
chocorramo.calorias = 400
chocorramo.unidadesallevar = 10;
chocorramo.sabor = `chocolate`;
chocolate++;

const doritos = new Dulces();
doritos.precio = 2500;
doritos.calorias = 350
doritos.unidadesallevar = 1;
doritos.sabor = `queso`;
queso++;

const quipitos = new Dulces();
quipitos.precio = 700;
quipitos.calorias = 200
quipitos.unidadesallevar = 4;
quipitos.sabor = `explosion de sabores`;
explosionsabores++;

const papas = new Dulces();
papas.precio = 2000;
papas.calorias = 350
papas.unidadesallevar = 6;
papas.sabor = `pollo`;
pollo++;

const cheetos = new Dulces();
cheetos.precio = 2000;
cheetos.calorias = 350
cheetos.unidadesallevar = 6;
cheetos.sabor = `queso`;
queso++;

const alpinito = new Dulces();
alpinito.precio = 1000;
alpinito.calorias = 200
alpinito.unidadesallevar = 6;
alpinito.sabor = `fresa`;
fresa++;

const gansito = new Dulces();
gansito.precio = 1500;
gansito.calorias = 300
gansito.unidadesallevar = 6;
gansito.sabor = `fresa`;
fresa++;
const choclitos = new Dulces();
choclitos.precio = 2500;
choclitos.calorias = 300
choclitos.unidadesallevar = 6;
choclitos.sabor = `limon`;
limon++;
const manimoto = new Dulces();
manimoto.precio = 1300;
manimoto.calorias = 200
manimoto.unidadesallevar = 2;
manimoto.sabor = `maní`;
mani++;

const rosquillas = new Dulces();
rosquillas.precio = 1000;
rosquillas.calorias = 300
rosquillas.unidadesallevar = 3;
rosquillas.sabor = `queso`;
queso++;

productomascaro = gomitas
if (galletas.precio > productomascaro.precio){
    productomascaro = galletas;
}
if (bombones.precio > productomascaro.precio){
    productomascaro = bombones;
}
if (chocolatinas.precio > productomascaro.precio){
    productomascaro = chocolatinas;
}
if (nucita.precio > productomascaro.precio){
    productomascaro = nucita;
}
if (chocorramo.precio > productomascaro.precio){
    productomascaro = chocorramo;
}
if (doritos.precio > productomascaro.precio){
    productomascaro = doritos;
}
if (quipitos.precio > productomascaro.precio){
    productomascaro = quipitos;
}
if (papas.precio > productomascaro.precio){
    productomascaro = papas;
}
if (cheetos.precio > productomascaro.precio){
    productomascalorias = cheetos;
}
if (alpinito.precio > productomascaro.precio){
    productomascaro = alpinito;
}
if (gansito.precio > productomascaro.precio){
    productomascaro = gansito;
}
if (choclitos.precio > productomascaro.precio){
    productomascaro = choclitos;
}
if (manimoto.precio > productomascaro.precio){
    productomascaro = manimoto;
}
if (rosquillas.precio > productomascaro.precio){
    productomascaro = rosquillas;
    
}
console.info(`El producto con más caro de los dulces cuesta ${productomascaro.precio} pesos `)




sabormasrepetido = uva;
if(queso>sabormasrepetido){
    sabormasrepetido = queso;
}
if(pollo>sabormasrepetido){
    sabormasrepetido = pollo;
}
if(explosionsabores>sabormasrepetido){
    sabormasrepetido = explosionsabores;
}
if(fresa>sabormasrepetido){
    sabormasrepetido = fresa;
}
if(limon>sabormasrepetido){
    sabormasrepetido = limon;
}
if(mani>sabormasrepetido){
    sabormasrepetido = mani;
}
if(chocolate>sabormasrepetido){
    sabormasrepetido = chocolate;
}

console.info(`El sabor mas común en los dulces se repite ${sabormasrepetido} veces`);

productomascalorias = gomitas

if (galletas.calorias > productomascalorias.calorias){
    productomascalorias = galletas;
}
if (bombones.calorias > productomascalorias.calorias){
    productomascalorias = bombones;
}
if (chocolatinas.calorias > productomascalorias.calorias){
    productomascalorias = chocolatinas;
}
if (nucita.calorias > productomascalorias.calorias){
    productomascalorias = nucita;
}
if (chocorramo.calorias > productomascalorias.calorias){
    productomascalorias = chocorramo;
}
if (doritos.calorias > productomascalorias.calorias){
    productomascalorias = doritos;
}
if (quipitos.calorias > productomascalorias.calorias){
    productomascalorias = quipitos;
}
if (papas.calorias > productomascalorias.calorias){
    productomascalorias = papas;
}
if (cheetos.calorias > productomascalorias.calorias){
    productomascalorias = cheetos;
}
if (alpinito.calorias > productomascalorias.calorias){
    productomascalorias = alpinito;
}
if (gansito.calorias > productomascalorias.calorias){
    productomascalorias = gansito;
}
if (choclitos.calorias > productomascalorias.calorias){
    productomascalorias = choclitos;
}
if (manimoto.calorias > productomascalorias.calorias){
    productomascalorias = manimoto;
}
if (rosquillas.calorias > productomascalorias.calorias){
    productomascalorias = rosquillas;
    
}
console.info(`El producto con más calorias de los dulces contiene ${productomascalorias.calorias} calorias `)

