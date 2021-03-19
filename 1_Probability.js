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
  
  let n=+userInput[0];
  let den=Math.pow(6,n);
  let num=den-Math.pow(5,n);
  
  console.log(num,den);

  //end-here
});