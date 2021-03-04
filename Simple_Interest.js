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
 
  let n=userInput[0].split(" ");
  let SI=0;
  
  SI=+(n[0]* +n[1] * +n[2])/100
  console.log(SI.toFixed(2));

  //end-here
});