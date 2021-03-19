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
  let str=a.slice();
  
  for(i=0;i<str.length;i++)
  {
      for(j=i+1;j<str.length;j++)
      {
          if(str[i]===str[j])
          {
              str.splice(j,1);
          }
      }
  }
  
  if(str.length===3)
  {
      console.log("Wonder");
  }
  else
  {
      console.log(-1);
  }
  
  //end-here
});