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
  let A=+n[0];
  let B=+n[1];
  let C=+n[2];
  
  if(A,B,C<=100000)
  {
      if(A,B,C===A,B,C || A,B>C || A,C>B || B,C>A)
      {
          console.log("yes");
      }
      else
      {
          console.log("no");
      }
  }

  //end-here
});