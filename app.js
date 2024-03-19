const http = require("http");

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
    if(req.url == "/home"){
        res.write("<html>");
        res.write("<head><title>Instagram</title><head>");
        res.write("<body><h1>Welcome home</h1></body>");
        res.write("</html>");
        res.end();

        
    }else if (req.url == "/about"){
        res.write("<html>");
        res.write("<head><title>Instagram</title><head>");
        res.write("<body><h1>Welcome to About Us page</h1></body>");
        res.write("</html>");
        res.end();
    }else if (req.url == "/node"){
        res.write("<html>");
        res.write("<head><title>Instagram</title><head>");
        res.write("<body><h1>Welcome to my Node Js project</h1></body>");
        res.write("</html>");
        res.end();
    }else if (req.url == "/" || req.url == " "){
        res.write("<html>");
        res.write("<head><title>Instagram</title><head>");
        res.write("<body><h1>ANANTHU UNNI P</h1></body>");
        res.write("</html>");
        res.end();
    }
    

});
server.listen(4000)
