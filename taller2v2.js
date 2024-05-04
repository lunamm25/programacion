
 const readlineSync = require(`readline-sync`);
 class Profesores{
    nombre = ``;
    correo = ``;
    #tienemaestria = true;

    constructor(nombre,correo,tienemaestria){
        this.nombre = nombre;
        this.correo = correo;
        this.#tienemaestria = tienemaestria;
    }

    set tienemaestria(tienemaestria){
        this.#tienemaestria =  tienemaestria;
    }
    get tienemaestria(){
        return this.#tienemaestria
    }
    agregardatos(){
        this.nombre = readlineSync.question(`Ingrese el nombre del profesor: `);
        if (this.nombre == ``){
            throw new Eror(`Debe ingresar el nombre: `);
         }
        this.correo = readlineSync.question(`Ingrese el correo del profesor: `);
        if (this.correo == ``){
            throw new Error(`Debe ingresar el correo: `);
         
         }
         this.#tienemaestria = +readlineSync.question(`Ingrese el número 1 si el profesor tiene maestria o 2 si no tiene: `);
         if (isNaN(this.tienemaestria) ){
            throw new Error(`La respuesta tiene que ser un número`)
         }

         if (this.tienemaestria==1){
            this.tienemaestria = true;
        }
        else{
            this.tienemaestria = false;
        }
        
}}
let listaprofes = [];
let numeroprofesores = readlineSync.question(`Ingrese el numero de profesores que desea agregar: `);
let i = 0;

while(i<numeroprofesores){
    i++;
    const profesor = new Profesores()
    profesor.agregardatos();
    listaprofes.push(profesor);


} 
for(let i2=0; i2<listaprofes.length; i2++){
console.info(`El nombre del profesor es ${listaprofes[i2].nombre}`)
console.info(`El correo del profesor es ${listaprofes[i2].correo}`)
console.info(`El profesor tiene maestria? ${listaprofes[i2].tienemaestria}`)}

class Programa {
    nombreprograma =``;
    jornada =  ``;

    constructor(nombreprograma,jornada){
    this.nombreprograma = nombreprograma;
    this.jornada = jornada;
}
programaagregardatos(){
this.nombreprograma = readlineSync.question(`Ingrese el nombre del programa: `);
    if (this.nombreprograma == ``){
        throw new Eror(`Debe ingresar el nombre del programa: `);
     }
this.jornada = readlineSync.question(`Ingrese diurno si el programa es de dia o nocturno si es de noche: `);
    if (this.nombreprograma == ``){
        throw new Eror(`Debe ingresar la jornada del programa: `);
     }
    
}}
class Asignaturas{
    nombreasignatura = ``;
    requieremaestria = true;
    horasasignatura = 0;
    programa = new Programa()
    
    constructor(nombreasignatura,requieremaestria,horasasignatura){
        this.nombreasignatura = nombreasignatura;
        this.requieremaestria = requieremaestria;
        this.horasasignatura = horasasignatura;
    }

    agregardatos(){
        this.nombreasignatura = readlineSync.question(`Ingrese el nombre de la asignatura: `);
        if (this.nombreasignatura == ``){
            throw new Eror(`Debe ingresar el nombre de la asignatura: `);
         }
         this.horasasignatura = +readlineSync.question(`Ingrese de cuantas horas es la asignatura: `);
        if (isNaN(this.horasasignatura)){
            throw new Eror(`Debe ingresar de cuantas horas es la asignatura `);
         }
         this.requieremaestria = readlineSync.question(`Ingrese el numero 1.Si la asignatura requiere maestria o 2. Si no requiere: `);
         
         if (isNaN(this.requieremaestria)){
            throw new Eror(`Debe ingresar como respuesta el número 1 o el número 2 `);
        }else{
            if (this.requieremaestria==1){
            
                this.requieremaestria = true;
            }
            else{
                this.requieremaestria = false;
            } }
            
       
} asignarprofesor(tienemaestria){
    if(tienemaestria == true && this.requieremaestria == true){
        console.info(`Se ha asignado al profesor ${listaprofes.nombre} la asignatura ${this.nombreasignatura} que requiere maestria`)
    }
}
accederprograma(){
    return this.programa.programaagregardatos()

}}
let listaprogramas = [];
let listaasignaturas = [];
let numeroasignaturas = readlineSync.question(`Ingrese el numero de asignaturas que desea agregar: `);
let o = 0;

while(o<numeroasignaturas){
    o++;
    const asignatura = new Asignaturas();
    asignatura.agregardatos();
    const programa = new Programa();
    asignatura.accederprograma()
    listaprogramas.push(asignatura.programa)
    //asignatura.asignarprofesor(listaprofes[o].tienemaestria);
    listaasignaturas.push(asignatura);

}
for(let o2=0; o2<listaasignaturas.length; o2++){
    console.info(`El nombre de la asignatura es ${listaasignaturas[o2].nombreasignatura}`);
    console.info(`Las horas de la asignatura son ${listaasignaturas[o2].horasasignatura}`);
    console.info(`La asignatura requiere maestria? ${listaasignaturas[o2].requieremaestria}`); 
    /* console.info(`Se ha asignado al profesor ${listaprofes[o2].nombre} la asignatura ${listaasignaturas[o2].nombreasignatura} que requiere maestria`);
*/
}
for(let a=0; a<listaprofes.length; a++){
    console.info(`El nombre del programa es ${listaprogramas[a].nombreprograma}`);
    console.info(`La jornada del programa es ${listaprogramas[a].jornada}`); 
}





