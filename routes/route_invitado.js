const express = require("express");
const controlador_invitado= require("../controllers/controllers_invitado")
const rutas_invitado= express.Router();

rutas_invitado.get("/listarProductos", controlador_invitado.renderizarInvitado );

module.exports=rutas_invitado;