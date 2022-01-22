var express = require('express');
const axios = require('axios');
var server = express();
server.use(express.json());
  
server.use('', express.static(__dirname + '/public'));
server.post('/update', function(req, res){
    console.log(req.body)
    // TODO validate body
    axios.post('http://192.168.0.73/update', req.body)
    .then(function (response) {
        // console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    res.send({status: "ok"})
})
server.listen(3000);