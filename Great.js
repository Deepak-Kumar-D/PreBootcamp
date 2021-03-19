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
  
  let n=userInput[0];
  let num=n.split("").map(Number);
  let sum=0;
  let prod=1;
  let E=0;
  
  for(i=0;i<num.length;i++)
  {
      sum+=num[i];
      prod*=num[i];
  }
  
  E=sum+prod;
  
  if(+n===E)
  {
      console.log("Great");
  }
  else
  {
      console.log("no");
  }
  
});