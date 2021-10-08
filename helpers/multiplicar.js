const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, listar, hasta) => {
    try {
        let salida = '';
        let file = `tabla-${base}.txt`;
        for (let i = 1; i <= hasta; i++) {
            let result = base * (i);
            salida += `${base} * ${(i)} = ${result}\n`;
        }

        if (listar) {
            console.log('*************');
            console.log(colors.blue(' Tabla del ' + base));
            console.log('*************');
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return file;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createFile
}