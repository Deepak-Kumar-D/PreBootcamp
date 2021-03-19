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
  
  let A=userInput[0].split(" ").map(Number);
  let N=A[0];
  let K=A[1];
  let num=userInput[1].split(" ").map(Number);
  let check=0;
  let count=0;
  
  if(num.length===N)
  {
      for(i=0;i<N;i++)
      {
          if(num[i]===K)
          {
              if(check===0)
              {
                  check = 1;
              }
              else
              {
                  count = count+1;
              }
          }
      }
  }
  
  if(check===0)
  {
      console.log(-1);
  }
  else
  {
      console.log(count);
  }
  
  //end-here
});