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
  
  let N=userInput[0].split(" ").map(Number);
  let B=N[0];
  let H=N[1];
  let area=(B*H)/2;

  console.log(area);

  //end-here
});