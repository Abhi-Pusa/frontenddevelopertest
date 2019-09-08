var express = require('express');
var app = express();
var fs = require('fs');

app.use('/',express.static('public'));

app.get('/getHotelList',function(req,res){
    //res.send('hello world abhinav');
    var data = fs.readFileSync('./server/hotellist.json');
    res.send(JSON.stringify(JSON.parse(data)));
});

app.listen('3030',function(){
    console.log(`server is running on port 3030`);
});