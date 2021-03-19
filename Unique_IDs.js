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
  let a=userInput[1].split(" ").map(Number).sort();
  let b=[];
  
  for(i=1;i<a.length;i++)
  {
      var prev=a[i-1];
      var curr=a[i];
      if(prev===curr)
      {
          b.push(a[i]);
      }
  }
  
  console.log(b.join(" "));
  
  //end-here
});
