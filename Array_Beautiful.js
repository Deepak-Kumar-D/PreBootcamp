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
  let n=userInput[1].split(" ");
  let sum=0;
  
  for(i=0;i<n.length;i++)
  {
      sum=sum+parseInt(n[i]);
  }
  
  if(sum%2===0 && sum%3===0 && sum%5===0)
  {
      console.log(1);
  }
  else
  {
      console.log(0);
  }
  
  //end-here
});