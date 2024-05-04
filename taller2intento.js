const readlineSync = require(`readline-sync`);
class Profesores{
    nombre = ``;
    correo = ``;
    #tienemaestria = true;
    pagoextra = 0;
    nombretipoprofesor = ``
    asignaturaasignada = 0;
    totalpago = 0;

    constructor(nombre,correo,tienemaestria,nombretipoprofesor,valorhora){
        this.nombre = nombre;
        this.correo = correo;
        this.#tienemaestria = tienemaestria;
        this.valorhora = valorhora;
        this.nombretipoprofesor = nombretipoprofesor
    }

    set tienemaestria(tienemaestria){
        this.#tienemaestria =  tienemaestria;
    }
    get tienemaestria(){
        return this.#tienemaestria
    }
    agregardatosprofesores(){
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
        this.nombretipoprofesor = +readlineSync.question(`Ingrese un número según el tipo de profesor:1.Planta, 2.Catedratico o 3.Catedratico asociado `);
    }
    clasificarprofesor(){}
    pagarprofesor(){}
    valorporpagototal(){}
   
    
}
   
class Planta extends Profesores{
    valorhora = 40000
    constructor(nombre,correo,tienemaestria,nombretipoprofesor,valorhora){
        super(nombre,correo,tienemaestria,nombretipoprofesor)
        this.valorhora = valorhora
    }

    clasificarprofesor(profesor){
    return this.valorhora;
    }
    pagarprofesor(){
        this.totalpago = this.asignaturaasignada * this.valorhora
        console.info(`El total a pagar al profesor es de${this.totalpago}`)
    }
    valorporpagototal(){
        let valordelpago =this.pagoextra+ this.totalpago
        console.info(`El pago del profesor de tipo ${this.nombretipoprofesor} es ${valordelpago}`)
    }
    valorporextras(){
        return this.pagoextra
    }
    }
class Catedratico extends Profesores{
    valorhora = 50000
    constructor(nombre,correo,tienemaestria,nombretipoprofesor,valorhora){
        super(nombre,correo,tienemaestria,nombretipoprofesor)
        this.valorhora = valorhora;

    }
        clasificarprofesor(){
    return this.valorhora
    }
    pagarprofesor(){
        this.totalpago = this.asignaturaasignada * this.valorhora
        console.info(`El total a pagar al profesor es de${this.totalpago}`)
    }
    valorporpagototal(){
        let valordelpago =this.pagoextra+ this.totalpago
        console.info(`El pago del profesor de tipo ${this.nombretipoprofesor} es ${valordelpago}`)
    }
    valorporextras(){
        return this.pagoextra
    }
}
class Catedraticoasociado extends Profesores{
    valorhora = 53500;
    constructor(nombre,correo,tienemaestria,nombretipoprofesor,valorhora){
        super(nombre,correo,tienemaestria,nombretipoprofesor)
        this.valorhora = valorhora;

    }
        clasificarprofesor(){
    return this.valorhora
    }
    pagarprofesor(){
        this.totalpago = this.asignaturaasignada * this.valorhora
        console.info(`El total a pagar al profesor tipo ${this.nombretipoprofesor}es de${this.totalpago}`)
    }
    valorporpagototal(){
        let valordelpago =this.pagoextra+ this.totalpago
        console.info(`El pago del profesor de tipo ${this.nombretipoprofesor} es ${valordelpago}`)
    }
    valorporextras(){
        return this.pagoextra
    }
    
}

class Asignaturas{
    nombreasignatura = ``;
    requieremaestria = true;
    horasasignatura = 0;
    profesor = new Profesores;
    
    
    constructor(nombreasignatura,requieremaestria,horasasignatura){
        this.nombreasignatura = nombreasignatura;
        this.requieremaestria = requieremaestria;
        this.horasasignatura = horasasignatura;
    }

    agregardatosasignatura(){
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
            
          
} 
asignarprofesor(profesor){
if(this.requieremaestria == true && profesor.tienemaestria == true){
    this.profesor = profesor;
this.profesor.asignaturaasignada += this.horasasignatura; 
console.info(`La asignatura fue asignada correctamente`)
    }
else if(this.requieremaestria == false && profesor.tienemaestria == false){
    
    this.profesor.asignaturaasignada += this.horasasignatura; 
    console.info(`La asignatura fue asignada correctamente`)
        }
        
}

}
class Programa {
    nombreprograma =``;
    jornada =  ``;
    asignatura = new Asignaturas
    recargo = 0;
    pagototalprofesores = 0;
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
    if (this.jornada.toLowerCase() == ``){
        throw new Eror(`Debe ingresar la jornada del programa: `);
     }
     if (this.jornada.toLowerCase() != `diurno` && this.jornada.toLowerCase() != `nocturno`){
        throw new Eror(`Debe ingresar la palabra diurno o la palabra nocturno `);
     }
this.recargo = this.recargo;
    
}

recargoextra(){
    if(this.jornada.toLowerCase()==`diurno` && this.asignatura.requieremaestria==true ){
        return this.recargo = 0.10;
    }
    else if(this.jornada.toLowerCase() == `nocturno` && this.asignatura.requieremaestria ==true){
        return this.recargo = 0.15
    }
}
pagoprofesores(){
     let valorrecargo=this.recargoextra()*this.asignatura.profesor.totalpago;
     valorrecargo = this.asignatura.profesor.pagoextra
     this.asignatura.profesor.this.pagototalprofesores += this.asignatura.profesor.pagoextra+ this.asignatura.profesor.totalpago;

     console.info(`Èl valor a total a pagar al profesor con recargos es de ${this.asignatura.profesor.pagoextra} `)
}
accederprofesor(){
    return this.asignatura.profesor.agregardatosprofesores()
}

}
let listaprofes = [];
let listaprogramas = [];
let listaasignaturas = [];
let numeroprogramas = +readlineSync.question(`Ingrese el numero de programas que desea agregar: `);
if(!numeroprogramas){
    throw new Error(`Debe ingresar el número de programas que desea agregar`)
}

//let numeroprofesores = readlineSync.question(`Ingrese el numero de profesores que desea agregar: `);
let i = 0;
while(i<numeroprogramas){
    i++;
    const programa = new Programa();
    programa.programaagregardatos();
    listaprogramas.push(programa);
    let numeroasignaturas = +readlineSync.question(`Ingrese el numero de asignaturas que desea agregar: `);
if(!numeroasignaturas){
    throw new Error(`Debe ingresar el número de programas que desea agregar`)
}
    let o = 0;
    while(o<numeroasignaturas){
        o++;
        const programaactual = listaprogramas[i-1];
        const asignatura = new Asignaturas()
        asignatura.agregardatosasignatura();
        programaactual.asignatura = asignatura;
        listaasignaturas.push(asignatura);
        const profesor = new Profesores();
        profesor.agregardatosprofesores();
        programa.pagoprofesores();
        profesor.pagarprofesor();
        profesor.pagoextra;

        let tipoprofesor;
        asignatura.asignarprofesor(profesor);
        if(profesor.nombretipoprofesor==1){
            tipoprofesor = new Planta(profesor.nombre,profesor.correo,profesor.tienemaestria,profesor.nombretipoprofesor,profesor.valorhora);
        }
        else if(profesor.nombretipoprofesor==2){
            tipoprofesor = new Catedratico(profesor.nombre,profesor.correo,profesor.tienemaestria,profesor.nombretipoprofesor,profesor.valorhora);
        }
        else if(profesor.tipoprofesor==3){
            tipoprofesor = new Catedraticoasociado(profesor.nombre,profesor.correo,profesor.tienemaestria,profesor.nombretipoprofesor,profesor.valorhora);
        }
        else{
            console.info(`Tipo de profesor no válido`)
        }

        asignatura.profesor = tipoprofesor;
        listaprofes.push(tipoprofesor)                 
    }

}

for(let a=0; a<listaprogramas.length; a++){
    console.info(`El nombre del programa es ${listaprogramas[a].nombreprograma}`);
    console.info(`La jornada del programa es ${listaprogramas[a].jornada}`); 
    
}
for(let a2 =0; a2<listaasignaturas.length; a2++){
    console.info(`El nombre de la asignatura es ${listaasignaturas[a2].nombreasignatura}`);
    console.info(`Las horas de la asignatura son ${listaasignaturas[a2].horasasignatura}`);
    console.info(`La asignatura requiere maestria? ${listaasignaturas[a2].requieremaestria}`); 
    console.info(`El nombre del profesor es ${listaprofes[a2].nombre}`);
    console.info(`El correo del profesor es ${listaprofes[a2].correo}`);
    console.info(`El profesor tiene maestria? ${listaprofes[a2].tienemaestria}`);
 if(listaprofes[a2].tienemaestria==false && listaasignaturas[a2].requieremaestria==true){
        console.info(`El profesor no puede orientar la asignatura ya que no tiene maestria `)
    }}

for(let a3 = 0; a3<listaprofes.length; a3++){
console.info(`El valor a pagar por asunto de recargos diurnos y nocturnos al profesor ${listaprofes[a3].nombre} es: ${listaprofes[a3].pagoextra}`)

}

