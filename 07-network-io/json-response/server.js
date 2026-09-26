import http from "node:http";

const server = http.createServer((req, res) => {
  const home = {
    "message": "Welcome to Student API",
  };

  const student = {
    "name": "Arjun",
    "college": "ADYPU",
    "branch": "ECE",
  };

  const skills = {
    "skills": ["JavaScript", "React", "Node.js", "Git"],
  };

  const unknown = {
    "error": "Route Not Found"
  };

  res.writeHead(200, { "Content-Type": "application/json" })

  if (req.url === "/") {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify(home));
  }
  else if(req.url === "/student") {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify(student));
  }
  else if(req.url === "/skills") {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify(skills));
  }
  else {
    res.writeHead(404, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify(unknown));
  }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
})