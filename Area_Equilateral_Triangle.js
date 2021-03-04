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
 
  let a=+userInput[0];
  let EQL=0;

  EQL=(Math.sqrt(3)/4)*Math.pow(a,2);

  console.log(EQL.toFixed(2));

  //end-here
});