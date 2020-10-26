const { createFile, listarTabla } = require('./multiplicar/multiplicar.js')
const argv = require('./config/yargs.js').argv;
const colors = require('colors');

const comando = argv._[0];

console.log('==================='.green);
console.log(`tabla de ${argv.base}`.green);
console.log('==================='.green);




switch (comando) {
        case 'listar':
        listarTabla(argv.base, argv.limite); 
        break;

        case comando:
        createFile(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado : ${archivo}`.green))
        .catch(err => console.log(err))
        break;

        case comando:
        console.log('listar'); 
        break;

    default:
        break;
}



