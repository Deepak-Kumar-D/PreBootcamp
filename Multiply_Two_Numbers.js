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
  
  let num=userInput[0].split(" ");
  let n=+num[0];
  let m=+num[1];
  let prod=n*m;
  
  console.log(prod);

  //end-here
});