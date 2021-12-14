const express = require("express");
const controlador_productos= require("../controllers/reg_productos")
const rutas_producto = express.Router();

rutas_producto.get("/RegProductos", controlador_productos.renderizarProductos);

module.exports=rutas_producto;