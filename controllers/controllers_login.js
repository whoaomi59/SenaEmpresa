/* los controladores */
const controlador = {};

controlador.Renderizar_index=(req,res)=>{
    res.render("login.ejs")
}
  
    controlador.Validar_usuario=(req,res)=>{
        /*  aqui se valida  los datos en la base de datos */
        var login = req.body.login;
        var password = req.body.password;

        if (login =="mario" && password =="123"){
            res.render("admin.ejs",{"usuario":login})
        }
        
        else{
            res.send("<h1>Usuario no autorizado</h1>")
        }
    }

module.exports=controlador;