class Venta{
    tipocliente= ``;
    valorproducto = 0;
    marcaproducto= ``;
     
    constructor (tipocliente, valorproducto, marcaproducto){
    if(!tipocliente){
    throw new Error(`Se debe especificar el tipo de cliente`)}
    if(!valorproducto){
    throw new Error(`Se debe especificar el valor del producto`)}
    if(!marcaproducto){
    throw new Error(`Se debe especificar la marca del producto`)}
    
    this.tipocliente = tipocliente;
    this.valorproducto = valorproducto;
    this.tipoproducto = marcaproducto;
    
    }
    
    
    sumaVentas(objeto){
        if(this.valorproducto>0){
        
        let suma = this.valorproducto + objeto.valorproducto
        console.info(`La suma de los ingresos por ventas es de ${suma}`)
            
    }else {
        console.info(`El valor del producto no puede ser negativo`)
    }
} 
}
    
    class Alquiler{
    tipocliente = ``;
    tiempoalquiler = 0;
    valortiempo = 0;
    
    constructor (tipocliente, tiempoalquiler,valortiempo){
    if(!tipocliente){
    throw new Error(`Se debe especificar el tipo de cliente`)}
    if(!tiempoalquiler){
    throw new Error(`Se debe especificar el tiempo de alquiler del producto`)}
    if(!valortiempo){
    throw new Error(`Se debe especificar el valor del tiempo según el producto`)}
                
    this.tipocliente = tipocliente;
    this.tiempoalquiler = tiempoalquiler;  
    this.valortiempo = valortiempo;  
}
sumaAlquiler(objeto){
    if(this.tiempoalquiler>0){
    let suma = this.valortiempo*this.tiempoalquiler + objeto.valortiempo*objeto.tiempoalquiler
    console.info(`La suma de los ingresos por alquiler es de ${suma}`)
}else {
    console.info(`El tiempo del alquiler del producto definido en horas no puede ser negativo`)
}


}
}
 computador1 = new Venta(`natural`,2000000,`asus`);
 computador2 = new Venta(`natural`,2000000,`hp`)
 computador1.sumaVentas(computador2);

 computador3 = new Alquiler(`natural`,1,10000)
 computador4 = new Alquiler(`natural`,2,10000)
 computador3.sumaAlquiler(computador4);