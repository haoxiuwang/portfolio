const http = require('http');
const express = require('express');
const mfunc = require('./mymodule');
const app = express()
const multipart = mfunc()
app.use(multipart)
http.createServer(app).listen(80)
