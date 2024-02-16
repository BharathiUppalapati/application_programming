const express = require('express');

const app = express();

const port = 3000;
app.get('/', function(req, res){

    var d = new Date();
    
    console.log('someone made a request from ' +req.ip);
    
    res.send('Hello World! </br>Todays Date is <b>' +d +'</b>' );
    
    });   
    app.listen(port, () => {
    
    console.log(`Example app listening on port ${port}`);
    
    });
   
