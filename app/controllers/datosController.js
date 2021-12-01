let mysql=require('../../db/mysql');
module.exports={
    listar:(req,res)=>{
        mysql.query('SELECT * FROM product',(error,results,fields)=>{
            if(error)
                res.json(error);
            else
                res.json(results);
        })
    },
    buscarId:(req,res)=>{
        let id=req.params.id;
        console.log('Buscando ' + id);
        mysql.query('SELECT * FROM product WHERE id= '+id,(error,results,fields)=>{
            if(error)
                res.json(error);
            else
                res.json(results);
        })
    },
    borrarId:(req,res)=>{
        let id=req.params.id;
        console.log('Borrando '+id);
        mysql.query('DELETE FROM product WHERE id='+id,(error,results,fields)=>{
            if(error)
                res.json(error);
            else
                res.json(results);
        });
    },
    agregar:(req,res)=>{
        console.log(req.body);
        //INSERT INTO datos(nombre,edad) VALUES ("pedro",17)
        let nombre=req.body.nombre;
        let cantidad=req.body.cantidad;
        let precio=req.body.precio;
        mysql.query("INSERT INTO product(name,quantity,cost) VALUES ('"+nombre+"',"+cantidad+","+precio+")",(error,results,fields)=>{
            if(error)
                res.json(error);
            else
                res.json(results);
        });

    }
}