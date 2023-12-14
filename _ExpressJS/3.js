const express = require("express");

const app = express();
// sending the HTML and JSON data

app.get("/", (req, res) => {
  res.send('"response from server"');
});

app.get("/api", (req, res) => {
  // res.send({
  //     name: "rohit",
  //     id: 1,
  //     language: "C/Cpp, Java, Python, JS",
  // });
  res.json([
    {
      name: "rohit",
      id: 1,
      language: "C/Cpp, Java, Python, JS",
    },
    {
      name: "rohit",
      id: 1,
      language: "C/Cpp, Java, Python, JS",
    },
    {
      name: "rohit",
      id: 1,
      language: "C/Cpp, Java, Python, JS",
    },
    {
      name: "John Doe",
      age: null,
      city: undefined,
    },
  ]);
});

const server = app.listen(8000, () => {
  const PORT = server.address().port;
  console.log(`Listening at http://localhost:${PORT}.`);
});
