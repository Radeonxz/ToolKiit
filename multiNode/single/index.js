const app = require("express")();

app.get("/isPrime", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const jsonResponse = isPrime(parseInt(req.query.number));
  res.send(jsonResponse);
});

app.listen(8081, () => console.log("Listening on 8081"));

const isPrime = (number) => {
  let startTime = new Date();
  let endTime = new Date();
  let isPrime = true;
  for (let i = 3; i < number; i++) {
    // loop for prime
    if (number % i === 0) {
      endTime = new Date();
      isPrime = false;
      break;
    }
  }

  if (isPrime) endTime = new Date();

  return {
    number: number,
    isPrime: isPrime,
    time: endTime.getTime() - startTime.getTime()
  };
};
