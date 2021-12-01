var router=require('express').Router();
var clientes=require('./clientes');
var producto=require('./producto');
router.use('/clientes',clientes);
router.use('/producto',producto);
router.get('/',(req,res)=>{
    res.json({
        mensaje:'Bienvenido a mi API'
    })
});
module.exports=router;