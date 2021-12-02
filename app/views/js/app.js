
//vector
let productos=[];

//botones
//btncargar
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
});
//Dowmloader
document.addEventListener('DOMContentLoaded',()=>{
    fetch('http://localhost:1339/ventas/producto')
    .then(response=>response.json())
    .then(json=>{
        Inf=JSON.stringify(json);
        let select=document.getElementById('Seleccion');
        let lista="";
        for(let j=0;j<json.length;j++){
            lista+="<option value='"+json[j].id+"'>"+json[j].name + json[j].cost+"</option>";
            select.innerHTML=lista;

        }
    })
})
//btnlistar
let btnlistar=document.getElementById('btnlistar');
btnlistar.addEventListener('click',()=>{
    fetch('http://localhost:1339/ventas/producto')
    .then(response => response.json())
    .then(json =>{
        inf=JSON.stringify(json);
        let resul=document.getElementById('resultados');
        
        let informacion=`
        <table><tr>
        <th>Producto</th>
        <th>Precio</th>
        </tr>
        `;
        for(let i=0;i<json.length;i++)
        {
            informacion+=`<tr>
            <td>${json[i].name}</td>
            <td align="center">${json[i].cost}</td>
            </tr>
            `;
            resul.innerHTML=informacion+'</table>'
        }
});
})
//btncarrito
let btncarrito =document.getElementById('btncarrito');
btncarrito.addEventListener('click',()=>

{
    let menu=document.getElementById('Seleccion').value;
    let cantidad=document.getElementById('cant').value;
    fetch(`http://localhost:1339/ventas/producto/${menu}`)
    .then(res=>res.json())
    .then(json=>{
        let costproduct=json[0].cost;
        let multiplicacion=costproduct*cantidad;
        let producto={productoid:`${json[0].id}`,cantidad:cantidad,costo:multiplicacion}
        productos.push(producto);
        console.log('Agregado en el carrito',producto);
    })
});
//btntotal
let btntotal=document.getElementById('btntotal');
btntotal.addEventListener('click',()=>{
    let suma1=0;
    let ivatotal=0;
    let ventas=document.getElementById('ventas');
    let iva=document.getElementById('iva');
    let costototal=document.getElementById('monto');
    for(let i=0;i<productos.length;i++){
        suma1+=productos[i].costo;
        ivatotal=suma1*0.16
    }
    ventas=suma1;
    iva.value=ivatotal;
    costototal.value=suma1+ivatotal; })
//btnfactura
let btnFactura=document.getElementById('btnfactura');
btnFactura.addEventListener('click',()=>{
    let date=document.getElementById('fecha').value;
    let rfc=document.getElementById('rfc').value;
    let ivat=document.getElementById('iva').value;
    let costt=document.getElementById('monto').value;
    let datosf={RFC_CUSTOMER:rfc,fecha:date,iva:ivat,monto,costt}
    fetch('http://localhost:1339/ventas/factura/',{
        method:'POST',
        body:JSON.stringify(datosf),
        headers:{
            'Content-Type':'apliaction/json'
        }
    })
    .then(res=>res.json())
    .then(json=>{
    console.log(datosf)
    console.log(json)
    })
})

