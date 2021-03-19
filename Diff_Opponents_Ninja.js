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
  
  let n=userInput[0].split(" ").map(Number);
  let a=n[0];
  let b=n[1];
  
  let diff=Math.abs(a-b);

  console.log(diff);

  //end-here
});