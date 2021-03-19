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
  
  let a=userInput[0].split("");
  let str=[];
  
  for(i=(a.length-1);i>=0;i--)
  {
      str.push(a[i]);
  }
  
  let x=a.join("");
  let y=str.join("");
  
  if(x===y)
  {
      console.log(1);
  }
  else
  {
      console.log(0);
  }

  //end-here
});