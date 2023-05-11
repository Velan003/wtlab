var http = require('http')
var url = require('url')
var querystring = require('querystring')
var port = 4000;

http.createServer((req, res) => {

    var query = url.parse(req.url).query;
    console.log(query);
    var name = querystring.parse(query)["username"];
    var email = querystring.parse(query)["email"];
    res.write('hi ' + name + ' your email is ' + email);
    res.end()

}).listen(port, (error) => {
    if (error) {
        console.log("error")
    }
    else {
        console.log("server running on " + port);
    }
})