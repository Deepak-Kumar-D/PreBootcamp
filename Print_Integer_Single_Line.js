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
 let n=userInput[0].split("");
 let a=[];
 
 for(i=0;i<n.length;i++)
 {
     a.push(+n[i]);
//  console.log(typeof(+n[i]));
 }
 console.log(a.join(" "));
 
  //end-here
});