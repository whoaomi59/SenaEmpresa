const controlador={}

controlador.renderizarIndex =(req,res)=>{
    res.render("index.ejs")
}

module.exports=controlador;