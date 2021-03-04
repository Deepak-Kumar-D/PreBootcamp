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
 let a=+n[0];
 let b=+n[1];
 
 if(a<b)
 {
    console.log(a); 
 }
 else
 {
    console.log(b); 
 }

  //end-here
});