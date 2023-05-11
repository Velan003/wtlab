http=require('http')
url=require('url')
util=require('util')

http.createServer(onRequest).listen();
util.log("Server is running now...");