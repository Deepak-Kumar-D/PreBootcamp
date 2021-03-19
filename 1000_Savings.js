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
  
  let a=1000;
  let n=Number(userInput[0]);
  let count = a+1000;
  
  if(n===1)
  {
      console.log(count);
  }
  else
  {
      for(i=2;i<=n;i++)
      {
          count +=i*a;
      }
  }
  
  console.log(count);

  //end-here
});