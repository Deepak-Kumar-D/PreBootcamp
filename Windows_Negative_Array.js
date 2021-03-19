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
  
  let num=+userInput[0];
  let n=userInput[1].split(" ").map(Number);
  let k=+userInput[2];
  let neg=[];
  
  for(i=0;i<n.length-2;i++)
  {
      var count=true;
      for(j=i;j<i+k;j++)
      {
          if(n[j]<0)
          {
              neg.push(n[j]);
              count=false;
              break;
          }
          
      }
      if(count)
          {
              neg.push(0);
              
          }
  }
  
  console.log(neg.join(" "));

  //end-here
});