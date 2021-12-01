let personaController=require('../controllers/datosController');
var router=require('express').Router();
    router.get('/',(req,res)=>{
        personaController.listar(req,res);
    });
    router.get('/:id',(req,res)=>{
        personaController.buscarId(req,res);
    });
    router.delete('/:id',(req,res)=>{
        personaController.borrarId(req,res);
    });
    router.post('/',(req,res)=>{
        personaController.agregar(req,res);
    });
    module.exports=router;