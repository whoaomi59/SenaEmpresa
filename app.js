const express = require('express');
const bodyparser = require("body-parser");

const servidor = express();

servidor.use(express.static(__dirname + '/public'));
servidor.use(bodyparser.json());
servidor.use(bodyparser.urlencoded({ extended: false }));
servidor.set('view engine', 'ejs');
servidor.set('views', __dirname + '/views');
/* ---------------------------------rutas----------------------------------------------- */
servidor.get("/", (req, resp) => {
    resp.render("login.ejs")
    /* resp.render("productos.ejs") */
    /* resp.render("index.ejs") */
    /* resp.render("reg_clientes.ejs") */
});
/* le decimos al servidor que use el modulo que creamos*/
servidor.use(require("./routes/route_login"))   
servidor.use(require("./routes/route_producto")) 
servidor.use(require("./routes/route_clientes")) 
servidor.use(require("./routes/route_invitado")) 
servidor.use(require("./routes/route_index")) 



servidor.listen(3000, () => {
    console.log("El servidor es esta ejecutando en el puerto 3000")
});