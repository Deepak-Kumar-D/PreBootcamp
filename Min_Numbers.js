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
  let R=Math.min(...N);
  
  console.log(R);
  
  //end-here
});