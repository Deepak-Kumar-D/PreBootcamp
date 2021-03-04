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
  let N=+userInput[0];
  let i=0;
  
  for(i=0;i<5;i++)
  {
  console.log(N);
}
  //end-here
});