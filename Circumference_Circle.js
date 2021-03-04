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
 let A=+userInput[0];
 let n=0;
 
 if(A>0||A==0)
 {
    n=2*Math.PI*A;
    console.log(n.toFixed(2));
 }
 else
 {
     console.log("Error");
 }

  //end-here
});