const controlador={}

controlador.renderizarInvitado =(req,res)=>{
    res.render("listar_productos.ejs")
}

module.exports=controlador;