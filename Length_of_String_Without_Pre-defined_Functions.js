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
  
  let str=userInput[0].split("");
  let count=0;
  
  for(i=0;i<str.length;i++)
  {
      count +=1;
  }
  
  console.log(count);
  
});