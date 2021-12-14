const controlador={}

controlador.renderizarProductos =(req,res)=>{
    res.render("productos.ejs")
}

module.exports=controlador;