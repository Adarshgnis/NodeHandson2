const express = require("express");
const app = express();

const port = 3002;

app.get("/", (req, res) => {
  console.log(req);
  console.log(res);
  res.send("<p>Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</p><button>hello</button>")
})

app.get('/about', (req, res)=>{
    res.send("<h1>Hello this is about Page</h1>")
})
app.get('/contact', (req, res)=>{
    res.send("<h1>Hello this is Contact Page</h1>")
})

app.listen(port)
