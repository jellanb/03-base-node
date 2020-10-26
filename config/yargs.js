const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite:{
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
.command('listar', 'comando para mostrar las tablas de multiplicar',opts)
.command('crear', 'comando para crear archivo de la tabla segun la base y el limite indicado',opts)
.argv;

module.exports = {
    argv
}