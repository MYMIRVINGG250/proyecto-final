var mysql = require('mysql');
var conection = mysql.createConnection({
host : 'localhost',
user: 'root',
password : '12345678',
database: 'company',

});
conection.connect((err)=>{
    if(err){
    console.log(err);
    return;
}   else{
    console.log('DB is connected');
}});
module.exports=conection;