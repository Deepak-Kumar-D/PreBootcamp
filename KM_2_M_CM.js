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
  let B=0;
  let C=0;
  
  B=A*1000;
  C=A*100000;
  
  console.log(B);
  console.log(C);

  //end-here
});