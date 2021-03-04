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
  let num=+userInput[0];
  let mul=0;
  let n=[];
  
  for(i=1;i<4;i++)
 {
     mul=num*i;
     n.push(mul);
 }
 
  console.log(n.join(" "));

  //end-here
});