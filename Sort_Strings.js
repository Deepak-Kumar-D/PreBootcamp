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
  
  let N=+userInput[0];
  let str=userInput[1].split(" ");
  
  if(str.length===N)
  {
      str.sort();
  }

  console.log(str.join(" "));

  //end-here
});