
const argv = require('yargs')
    .options("b",{
        alias: "base",
        type: "number",
        demandOption: true,
        describe:"toma la base de la tabla de mulriplicar"
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        default: false,
        describe:"muestra la lista "
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        default: false,
        describe:"decide hasta que limite es la tabla de multiplicar "
    })
    .check((argv,option) => {
        if (isNaN(argv.b)){
            throw "la base tiene que ser un numero"
        }
        return true
    })
    .check((argv,option) => {
        if (isNaN(argv.l)){
            throw "el limite tiene que ser un numero"
        }
        return true
    })
    .argv;

module.exports =argv;
