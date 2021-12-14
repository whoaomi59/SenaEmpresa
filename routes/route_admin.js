const express = require("express");
const controlador_admin= require("../controllers/controllers_admin")
const rutas_admin = express.Router();

rutas_admin.get("/admin", controlador_admin.renderizaradmin );

module.exports=rutas_admin;