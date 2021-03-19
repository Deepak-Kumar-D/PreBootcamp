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
  let list=userInput[1].split(" ");
  
  if(n===list.length)
  {
      for(i=0;i<n;i++)
      {
          for(j=i+1;j<n;j++)
          {
              if(list[i]===list[j])
              {
                  list.splice(j,1);
              }
          }
          
      }
  }
  
  console.log(list.join(" "));
  
});