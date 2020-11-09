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
            for (let i = 0; i < listaDeUsers.length; i++){
                console.log('nombre: '+listaDeUsers[i].nombre+'\nmail: '+listaDeUsers[i].mail);
            }
            /*listaDeUsers.forEach(usuarios => {
                console.log('nombre: '+usuarios.nombre);
                console.log('mail: '+usuarios.mail);
            });*/
        }
        break;
    case 'agregar':
        let nombre = process.argv[3];
        let mail = process.argv[4];
        listaDeUsers.crearUsuario(nombre, mail);
        
        break;
    default:
        break;
}