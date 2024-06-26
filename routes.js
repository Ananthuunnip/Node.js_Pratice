

const fs = require('fs');

const requestHandeler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url ==="/"){
        let messages = "";
        if (fs.existsSync('message.txt')){
            messages = fs.readFileSync('message.txt', 'utf8')
        }
        res.write("<html>");
        res.write("<head><title>Instagram</title></head>");
        res.write("<body><form action='/message' method='POST'><label>"+messages +"</label><br><input type='text' name ='message'><button type='submit'>submit</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on('data',chunk =>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile("message.txt", message, err =>{
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }
    res.setHeader("Content-Type","text/html");
    res.write("<html>");
    res.write("<head><title>Instagram</title><head>");
    res.write("<body><h1>ANANTHU UNNI P</h1></body>");
    res.write("</html>");
    res.end();
}

// first way i wroted=>

// module.exports = requestHandeler;

//second way i wroted=>

// one way to have multiple 
// module.exports = {
//     handler : requestHandeler,
//     someText : "some hard code Text"
// }; 

//third way i wroted =>

// another way
// module.exports.handler = requestHandeler;
// module.exports.someText ="Some hard code Text"


//Finealy it's be like =>

// we can write above code like this commenly
exports.handler = requestHandeler;
exports.someText ="Some hard code Text"

