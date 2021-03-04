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
  let A=+userInput[0];
  let B=+userInput[1];
  let C=0;
  
  C=A+B;
  
  console.log(C.toFixed(2));

  //end-here
});