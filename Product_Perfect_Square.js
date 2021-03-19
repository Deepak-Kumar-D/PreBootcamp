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
  let prod=N*M;
  let sqr=N*N;
  
  if(prod===sqr)
  {
      console.log("yes");
  }
  else
  {
      console.log("no");
  }
  
  //end-here
});