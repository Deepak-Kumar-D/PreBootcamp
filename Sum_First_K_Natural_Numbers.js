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
  let sum=0;
  
  if(n<=100000)
  {
      for(i=1;i<=n;i++)
      {
          sum +=i;
      }
  }

  console.log(sum);

  //end-here
});