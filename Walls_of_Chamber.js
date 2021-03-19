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
  
  let n=+userInput[0];
  let num=userInput[1].split(" ").map(Number);
  let wall=0;
  
  if(num.length===n)
  {
      if(num[1]>num[0] || num[1]>num[2])
      {
          console.log(0);
      }
      else
      {
      for(i=0;i<n;i++)
      {
          var larg=num[i];
          for(j=i+1;j<n;j++)
          {
              if(num[j]>larg)
              {
                  larg=num[j];num.splice(j,1);
              }
          }
      }
      
      wall=Math.abs(num[0]-num[1]);
      console.log(wall);
      }
  }
  
  
  
});