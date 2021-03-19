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
  
  for(i=0;i<a.length;i++)
  {
      if(isNaN(a[i]))
      {
          continue;
          
      }
      else
        str.push(a[i]);
  }
  
  let sum=0;
  for(i=0;i<str.length;i++)
  {
      sum+=parseInt(str[i]);
  }
  console.log(sum);
      
  //end-here
});