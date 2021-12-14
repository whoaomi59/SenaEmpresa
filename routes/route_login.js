/* exportar rutas */
const express = require('express');
const ruta_index = express.Router();
const cont_index = require("../controllers/controllers_login");

ruta_index.get("/login", cont_index.Renderizar_index)
ruta_index.post("/Validar_usuario", cont_index.Validar_usuario)

module.exports = ruta_index;