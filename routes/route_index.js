const express = require("express");
const controlador_index= require("../controllers/controllers_index")
const rutas_index = express.Router();

rutas_index.get("/index", controlador_index.renderizarIndex );

module.exports=rutas_index;