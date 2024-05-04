const readlineSync = require(`readline-sync`);
class Profesores{
    nombre = ``;
    correo = ``;
    #tienemaestria = true;
    nombretipoprofesor = ``
    valorhora = 0;
    asignaturaasignada = 0;
    valorpago = 0;
    totalpago = 0;
    pagoextra = 0;


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

    clasificarprofesor(profesor){
        return this.valorhora
    }

    pagarprofesor(){
        this.clasificarprofesor();
        let sumarpago = this.asignaturaasignada * this.valorhora;
        this.valorpago = sumarpago;
        return this.valorpago;
    }
    pagarporrecargos(){
        let valorrecargo =this.pagarprofesor()* this.pagoextra;
        return valorrecargo;
    }
    pagototalprofesor(){
        this.totalpago=this.pagarprofesor()+this.pagarporrecargos();
        return this.totalpago;
    }
}
   
class Planta extends Profesores{
    
    constructor(nombre,correo,tienemaestria,nombretipoprofesor,){
        super(nombre,correo,tienemaestria,nombretipoprofesor,40000)
        
    }

    clasificarprofesor(profesor){
    return this.valorhora = 40000;
    }
    pagarprofesor(){
        this.clasificarprofesor();
        let sumarpago = this.asignaturaasignada * this.valorhora;
        this.valorpago = sumarpago;
        return this.valorpago;
    }
    pagarporrecargos(){
        let valorrecargo =this.pagarprofesor()* this.pagoextra;
        return valorrecargo;
    }
    pagototalprofesor(){
        this.totalpago=this.pagarprofesor()+this.pagarporrecargos();
        return this.totalpago;
    }
    }
class Catedratico extends Profesores{
    constructor(nombre,correo,tienemaestria,nombretipoprofesor){
        super(nombre,correo,tienemaestria,nombretipoprofesor,50000)

    }
        clasificarprofesor(profesor){
    return this.valorhora = 50000;
    }
    pagarprofesor(){
        this.clasificarprofesor();
        let sumarpago = this.asignaturaasignada * this.valorhora;
        this.valorpago = sumarpago;
        return this.valorpago;
    }
    pagarporrecargos(){
        let valorrecargo =this.pagarprofesor()* this.pagoextra;
        return valorrecargo;
    }
    pagototalprofesor(){
        this.totalpago=this.pagarprofesor()+this.pagarporrecargos();
        return this.totalpago;
    }
}
class Catedraticoasociado extends Profesores{
    constructor(nombre,correo,tienemaestria,nombretipoprofesor){
        super(nombre,correo,tienemaestria,nombretipoprofesor,53500)

    }
        clasificarprofesor(profesor){
    return this.valorhora = 53500
    }
    pagarprofesor(){
        this.clasificarprofesor();
        let sumarpago = this.asignaturaasignada * this.valorhora;
        this.valorpago = sumarpago;
        return this.valorpago;
    }
    pagarporrecargos(){
        let valorrecargo =this.pagarprofesor()* this.pagoextra;
        return valorrecargo;
    }
    pagototalprofesor(){
        this.totalpago=this.pagarprofesor()+this.pagarporrecargos();
        return this.totalpago;
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
 this.profesor.asignaturaasignada = this.horasasignatura ; 
 console.info(`Se le asignaron ${this.horasasignatura} horas al profesor`);
console.info(`La asignatura fue asignada correctamente`)
    }
else if(this.requieremaestria == false && profesor.tienemaestria == false){
    this.profesor.asignaturaasignada = this.horasasignatura ; 
    console.info(`La asignatura fue asignada correctamente`)
        }
else if(this.requieremaestria == false && profesor.tienemaestria == true){
    this.profesor.asignaturaasignada = this.horasasignatura ; 
    console.info(`La asignatura fue asignada correctamente`)
        }  
else{
    console.info(`La asignatura no fue agregada`)
}  
}

}
class Programa {
    nombreprograma =``;
    jornada =  ``;
    asignatura = new Asignaturas
    recargo = 0;
    pagototalprofesores = 0;
    constructor(nombreprograma,jornada,pagototalprofesores){
    this.nombreprograma = nombreprograma;
    this.jornada = jornada;
    this.pagototalprofesores;
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
    if(this.jornada.toLowerCase()==`diurno` && this.asignatura.requieremaestria==true && this.asignatura.profesor.tienemaestria ){
        console.info(`El recargo es del 10%`)
         this.recargo = 0.10;
         this.asignatura.profesor.pagoextra=this.recargo
         return this.recargo
    }
    else if(this.jornada.toLowerCase() == `nocturno` && this.asignatura.requieremaestria ==true && this.asignatura.profesor.tienemaestria ){
        console.info(`El recargo es del 15%`)
        this.recargo = 0.15;
        this.asignatura.profesor.pagoextra=this.recargo
        return this.recargo
    }
}

accederprofesor(){
    return this.asignatura.profesor.agregardatosprofesores()
}
pagoprofesoresprograma(){
 this.pagototalprofesores =this.pagototalprofesores+ this.asignatura.profesor.pagototalprofesor();
 return this.pagototalprofesores;
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
        //profesor.pagarprofesor();
       // profesor.pagoextra;

        let tipoprofesor;
        if(profesor.nombretipoprofesor==1){
            tipoprofesor = new Planta(profesor.nombre,profesor.correo,profesor.tienemaestria,profesor.nombretipoprofesor,profesor.valorhora);
        }
        else if(profesor.nombretipoprofesor==2){
            tipoprofesor = new Catedratico(profesor.nombre,profesor.correo,profesor.tienemaestria,profesor.nombretipoprofesor,profesor.valorhora);
        }
        else if(profesor.nombretipoprofesor==3){
            tipoprofesor = new Catedraticoasociado(profesor.nombre,profesor.correo,profesor.tienemaestria,profesor.nombretipoprofesor,profesor.valorhora);
        }
        else{
            console.info(`Tipo de profesor no válido`)
        }

        asignatura.profesor = tipoprofesor;
        asignatura.asignarprofesor(tipoprofesor);
        profesor.clasificarprofesor(tipoprofesor);
        profesor.pagarprofesor(tipoprofesor);
        listaprofes.push(tipoprofesor);     
        programaactual.recargoextra();
        programaactual.pagoprofesoresprograma();

    }
    
}

for(let a=0; a<listaprogramas.length; a++){
    console.info(`El nombre del programa es ${listaprogramas[a].nombreprograma}`);
    console.info(`La jornada del programa es ${listaprogramas[a].jornada}`); 

    for(let a2 =0; a2<listaasignaturas.length; a2++){
        console.info(`El nombre de la asignatura es ${listaasignaturas[a2].nombreasignatura}`);
        console.info(`Las horas de la asignatura son ${listaasignaturas[a2].horasasignatura}`);
        console.info(`La asignatura requiere maestria? ${listaasignaturas[a2].requieremaestria}`); 
    
        console.info(`El nombre del profesor es ${listaprofes[a2].nombre}`);
        console.info(`El correo del profesor es ${listaprofes[a2].correo}`);
        console.info(`El profesor tiene maestria? ${listaprofes[a2].tienemaestria}`);
        if(listaasignaturas[a2].requieremaestria == true && listaprofes[a2].tienemaestria == true){
        console.info(`${listaprogramas[a2].recargoextra()}`);
        console.info(`El pago sin recargos al profesor ${listaprofes[a2].nombre} es de ${listaprofes[a2].pagarprofesor()}`);
        console.info(`El pago por recargos diurnos y nocturnos al profesor ${listaprofes[a2].nombre} es de ${listaprofes[a2].pagarporrecargos()}`);
    }
        console.info(`El pago total de ${listaprofes[a2].nombre} es de ${listaprofes[a2].pagototalprofesor()}`);
        if(listaprofes[a2].tienemaestria==false && listaasignaturas[a2].requieremaestria==true){
            console.info(`El profesor no puede orientar la asignatura ya que no tiene maestria `)
        }
    }            console.info(`El pago total de los profesores del programa ${listaprogramas[a].nombreprograma} es de ${listaprogramas[a].pagoprofesoresprograma()}`);

    }
       




