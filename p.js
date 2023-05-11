const http = require('http')
const querystring = require('querystring')
const express=require("express");
const app=express();
const path=require("path");
const collection=require("./mon");
var qs, name, passwd
const port = 4002
http.createServer((req, res) => {
    var value = ""
    req.on('data', (ch) => {
        console.log(ch)
        value += ch
        console.log("readable data " + value)
    });
    req.on('end', async() => {
        qs = querystring.parse(value)
        const data={
            fname:qs['fname'],
            lname:qs['lname'],
            email:qs['email'],
            pwd:qs['pwd'],
            username:qs['username']
        }
        await collection.insertMany([data]);
        res.write("success");
        res.end()
    });
}).listen(port, (error) => {
    if (error) {
        console.log("error occurs")
    }
    else {
        console.log("server listening on " + port) 
    }
});


