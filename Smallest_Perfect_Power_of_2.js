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
  
  let n=+userInput[0];
  let pwr=0;
  
  for(i=(n+1);i>n;i++)
  {
    for(j=i;j<=i;j=j/2)
    {
      if(j%2===0)
      {
          if(j/2===1)
          {
              pwr=i;break;
          }
      }
      else
      {
          break;
      }
    }
    if(pwr>0)
    {
        break;
    }
  }
  
  console.log(pwr);

  //end-here
});