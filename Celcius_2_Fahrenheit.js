// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  var temperature=userInput[0];
  var convert=(parseInt(temperature)*(9/5)+32);

  console.log(convert.toFixed(2));

  //end-here
});