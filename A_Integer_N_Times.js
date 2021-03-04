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
 
  let A=userInput[0].split(" ");
  let N=+A[1];
  let i=0;
  
  for(i=0;i<N;i++)
  {
   console.log(A[0]);
  }

  //end-here
});