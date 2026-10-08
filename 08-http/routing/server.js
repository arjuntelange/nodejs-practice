import http from "node:http";

const myServer = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Welcome Home");
      break;

    case "/about":
      res.end("About Arjun");
      break;

    case "/contact":
      res.end("Arjun's Contact");
      break;

    default:
      res.statusCode = 404;
      res.end("Error 404: Page not found.");
      break;
  }
});

myServer.listen(8000, () => {
  console.log("Sever running on port 8000.");
});
