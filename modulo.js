const fs = require ('fs');

module.exports = users = {
    archivo : './users.json',
    leerJson : function(){
        let leer = fs.readFileSync(this.archivo);
        let jsonPaseado = JSON.parse(leer);
        return jsonPaseado;
    },
    crearUsuario : function (nombre, mail){

        let nuevoUsuario = {
            nombre : nombre,
            mail : mail
        }
        let usuariosAnteriores = this.leerJson();
        usuariosAnteriores.push(nuevoUsuario);
        console.log(usuariosAnteriores);
    }
}
