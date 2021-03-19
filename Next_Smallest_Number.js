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
  let small=[];
  
  if(num.length===n)
  {
      for(i=0;i<=n;i++)
      {
          if(i===n)
          {
              small.push(-1);
          }
          else
          {
              for(j=i+1;j<=n;j++)
              {
              if(num[j]<num[i])
              {
                  small.push(num[j]);break;
              }
              else if(j===n-1)
              {
                  small.push(-1);
              }}
          }
      }
      
  }
  
  console.log(small.join(" "));
  
});