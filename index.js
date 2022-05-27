const express=require('express');// determinando agit utilização do express
const app=express();
const path=require ('path');//endereço de cada rota
const router=express.Router();//trabalha com rotas

const {engine} = require("express-handlebars");

app.engine('handlebars', engine({
    defaultLayout: 'main', 
    runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefaukt: true,
    },
}))

app.set('view engine', 'handlebars');
router.get('/', function(req,res){
    res.render('index')
})


router.get('/', function(req,res){
    res.render('/index');
})
router.get('/about', function(req,res){
    res.render('/about');
})

app.use('/',router);
app.use('/about',router);
app.listen(process.env.port||3000);
console.log("Servidor rodando");