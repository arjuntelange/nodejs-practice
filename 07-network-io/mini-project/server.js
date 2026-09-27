import http from "node:http";

const server = http.createServer((req, res) => {
  const home = {
    message: "Welcome to student API",
  };

  const student = {
    name: "Arjun",
    college: "ADYPU",
    branch: "ECE",
  };

  const skills = {
    skills: ["JavaScript", "React", "Node.js", "Git"],
  };

  const projects = {
    projects: ["FlowBoard", "SkillStack"],
  };

  const contact = {
    email: "arjuntelange08@gmail.com",
    phone: "8805122256",
  };

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(home));
  } else if (req.url === "/skills") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(skills));
  } else if (req.url === "/student") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(student));
  } else if (req.url === "/projects") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(projects));
  } else if (req.url === "/contact") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(contact));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        error: "Route Not Found",
      }),
    );
  }
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
