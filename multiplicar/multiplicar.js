const fs = require('fs');


const createFile = ( base, limite = 10 ) => {
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }        

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);            
        }

        fs.writeFile(`tablas/tabla-${base} al ${limite}.txt`, data, (err) => {
        if (err)
            reject(err);
        else
            resolve(`tabla-${base}.txt`);
        })
    })
}

const listarTabla = (base, limite = 10) => {
    
        let data = '';

        if (!Number(base)) {
            console.log(`El valor introducido ${base} no es un numero`);
            return;
        }        

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);            
        }

        console.log(data);       
}

module.exports = {
    createFile,
    listarTabla
}