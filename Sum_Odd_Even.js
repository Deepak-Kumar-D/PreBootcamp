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
  
  let num=userInput[0].split(" ").map(Number);
  let N=num[0];
  let M=num[1];
  let sum=N+M;
  
  if(sum%2===0)
  {
      console.log("even");
  }
  else
  {
      console.log("odd");
  }
  
  //end-here
});