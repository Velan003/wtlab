const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url);
  const params = querystring.parse(query);
  
  if (pathname === '/submit') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Submitted Data</h1>`);
    res.write(`<p>Name: ${params.unam}</p>`);
    res.write(`<p>DOB: ${params.udob}</p>`);
    res.write(`<p>Phone No: +91${params.io}${params.unum}</p>`);
    res.write(`<p>Age: ${params.uage}</p>`);
    res.write(`<p>Gender: ${params.g}</p>`);
    res.write(`<p>Aadhar No: ${params.quantity}</p>`);
    res.write(`<p>Email: ${params.email}</p>`);
    res.write(`<p>Roll No: ${params.rollno}</p>`);
    res.write(`<p>From: ${params.Departure}</p>`);
    res.write(`<p>To: ${params['']} </p>`);
    res.write(`<p>Class: ${params.class}</p>`);
    res.write(`<p>Type: ${params.type}</p>`);
    res.end();
  } else {
    res.write("404 not found");
res.end();
}});
      