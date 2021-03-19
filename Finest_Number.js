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
  
  let z=+userInput[0];
  let n=userInput[1].split(" ").map(Number);
  let a=[];
  
  for(i=0;i<=n.length;i++)
  {
      for(j=1;j<n[i];j++)
      {
         if((Math.pow(j,3)+Math.pow((j+1),3))===n[i])
         {
             a.push(n[i]);
         } 
      }
  }
  
  a.sort(function(a,b)
  {
      return a-b;
  });
  
  if(a.length>1)
  {
      console.log(a.join(" "));
  }
  else
  {
      console.log(-1);
  }

  //end-here
});