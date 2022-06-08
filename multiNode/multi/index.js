const app = require("express")();
const { fork } = require("child_process");

app.get("/isPrime", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const childProcess = fork("./helper.js");
  childProcess.send({ number: parseInt(req.query.number) });
  childProcess.on("message", (message) => res.send(message));
});

app.listen(8081, () => console.log("Listening on 8081"));
