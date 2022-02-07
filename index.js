const fileSystem = require("fs");
const http = require("http");
const url = require("url");

const add = (x, y) => {
  if (x + y > 10) return "sok";
  if (x + y < 0) return 0;
  return Math.floor(x + y);
};

// localhost:8080/?num1=20&num2=5
//create a server object:
http
  .createServer(function (req, res) {
    if (req.url === "/favicon.ico") return res.end();
    const queryObject = url.parse(req.url, true).query;
    console.log(url.parse(req.url, true));
    console.log(queryObject);
    const result = add(Number(queryObject.num1), Number(queryObject.num1));
    console.log(result);
    fileSystem.writeFileSync("./myFile.txt", result.toString());
    res.write(result.toString()); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
