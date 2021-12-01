let btnagregar = document.getElementById("btnagregar");
btnagregar.addEventListener('click',()=>{
    let nombre=document.getElementById('nombre').value;
        let cantidad=document.getElementById('cantidad').value;
        let precio=document.getElementById('precio').value;
        let datos={nombre:nombre,cantidad:cantidad,precio:precio};
        console.log(datos);
        fetch('http://localhost:1339/ventas/producto',{
            method:'POST',
            body:JSON.stringify(datos),
            headers:{
            'Content-Type':'application/json'
        }
        })
            .then(res=>res.json())
            .then(json=>{
                let resul=document.getElementById('resultados');
                    resul.innerHTML=`
                    <p>SE INSERTO EL REGISTRO CON EL ID: ${json.insertId}<P>`
                    ;
                    document.getElementById('nombre').value=" ";
                console.log(json)
            });
})