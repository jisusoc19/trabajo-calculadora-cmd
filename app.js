
const {creararchivo}= require("./helper/multi");
const argv = require("./config/yargs");



console.clear();
// const [, , arg3=`base=5`]= process.argv;
// const [,base=5] =arg3.split("=");



creararchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo=>console.log("se ha creado correctamente"))
    .catch(err=>console.log(err));




