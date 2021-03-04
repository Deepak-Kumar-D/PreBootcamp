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
  let c=+n[2];
  let root1=0;
  let root2=0;
  
  root1=(-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
  
  root2=(-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
  
  console.log(root1.toFixed(2));
  console.log(root2.toFixed(2));

  //end-here
});