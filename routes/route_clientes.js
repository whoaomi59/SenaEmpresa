const express = require("express");
const controlador_clientes= require("../controllers/controllers_clientes")
const rutas_clientes = express.Router();

rutas_clientes.get("/Regcliente", controlador_clientes.renderizarClientes );

module.exports=rutas_clientes;