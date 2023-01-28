const fs =require("fs");
const colors = require("colors");

const creararchivo=async(base=5, l=false,h=false)=>{
     try {
    let salida ="";
    if(h){
        for (let contador=0;contador<=h;contador++){
            operacion = contador*base
            salida = salida += `${base} x ${contador} = ${operacion}\n`;
    } 
    }else{
        for (let contador=0;contador<=10;contador++){
            operacion = contador*base
            salida = salida += `${base} x ${contador} = ${operacion}\n`;
        }       
    }

    if (l){
        console.log("==============".green);
        console.log(colors.rainbow(`tabla del 5:`), colors.blue(base));
        console.log(colors.red("=============="));
        console.log(colors.rainbow(salida));
    }
    // se necesita un coger error osea un try
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    return `tabla-${base}.txt creada`;
    } catch (err) {
        throw err 
    }

    
       
    
}
module.exports = {
    creararchivo 

}