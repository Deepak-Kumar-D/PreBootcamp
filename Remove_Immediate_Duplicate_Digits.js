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
  
  let a=userInput[0].split("").map(Number);
  
  for(i=1;i<a.length;i++)
  {
      var prev=a[i-1];
      var curr=a[i];
      if(prev===curr)
      {
          a.splice(i-1,2);
      }
  }
  for(i=a.length;i<=a.length;i++)
  {
      var l=a[i];
      var p=a[i-1];
      if(l===a)
      {
          a.slice(i-1,2)
      }
  }
  
  console.log(a.join(""));
  
  //end-here
});
