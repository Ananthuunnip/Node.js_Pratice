const http = require("http");

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
    console.log("ANANTHU UNNI P")
    res.end("ANANTHU UNNI P")
    

});
server.listen(4000)
