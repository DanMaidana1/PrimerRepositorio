const fs = require ('fs');

module.exports = user = {
    archivo : './users.json',
    leerJson : function(){
        leer = fs.readFileSync(this.archivo);
        jsonPaseado = JSON.parse(leer);
        return jsonPaseado;
    }

}
