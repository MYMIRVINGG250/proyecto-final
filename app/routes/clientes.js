var router=require('express').Router();
    router.get('/',(req,res)=>{
        res.json({Mensaje:'Todos los clientes'})
    });
    router.get('/:id',(req,res)=>{
        res.json({Mensaje:'Buscar un cliente'})
    });
    router.post('/',(req,res)=>{
        res.json({Mensaje:'Agregar un cliente'})
    });
    router.delete('/:id',(req,res)=>{
        res.json({Mensaje:'Borrar un cliente'})
    });
    router.put('/:id',(req,res)=>{
        res.json({Mensaje:'Modificar un cliente'})
    });
    module.exports=router;