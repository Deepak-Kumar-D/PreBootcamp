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
  
  let z=userInput[0].split(" ").map(Number);
  let a=Math.abs(z[0]);
  let b=Math.abs(z[1]);
  let GCD=0;
  
  for(i=1;i<=a && i<=b;i++)
  {
      if(a%i===0 && b%i===0)
      {
          GCD=i;
      }
  }
 
  
  if(GCD>0)
  {
      console.log(GCD);
  }
  else
  {
      console.log(-1);
  }
  
  //end-here
});