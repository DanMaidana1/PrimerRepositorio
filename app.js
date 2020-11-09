const process = require('process');
const modulo = require('./modulo');

let comando = process.argv[2];

switch (comando){
    case 'leer':
        let listaDeUsers = modulo.leerJson();
        if (listaDeUsers === 0){
            console.log('lista vacia');
        }else{
            console.log('lista de usuarios: ');
            for (let i = 0; i < listaDeUsers; i++){
                console.log('nombre: '+listaDeUsers[i].nombre+'\nmail: '+listaDeUsers[i].mail);
            }
        }
        break;
}