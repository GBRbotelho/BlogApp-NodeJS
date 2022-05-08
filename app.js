//Carregamento de Modulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require ('body-parser')
    const app = express()
    const { engine } = require ('express-handlebars');
    const path = require('path')
    const admin = require('./router/admin')
    const mongoose = require ('mongoose')
    const session = require('express-session')
    const flash = require('connect-flash')
//Configuraçoes
    // Sessão
        app.use(session({
            secret: 'cursodenode',
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    //Middleware
        app.use((req,res,next)=>{
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg=req.flash('erro_msg')
            next()
        })
    //Body Parser
        app.use(express.json());
        app.use(express.urlencoded({extended:true}))
    //Handlebars
        app.engine('handlebars', engine({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }))
        app.set('view engine', 'handlebars');
    //Mongoose
        mongoose.connect('mongodb://localhost/blogapp').then(()=> {
            console.log('Conectado ao mongo')
        }).catch((err) => {
            console.log('Erro ao se conectar: '+err)
        })
    //Public
        app.use(express.static(path.join(__dirname,'public')))
        
//Rotas
    app.use('/admin',admin);

//Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log('Servidor rodando! ')
})