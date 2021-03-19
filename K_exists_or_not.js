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
  
  let num=userInput[0].split(" ").map(Number);
  let n=num[0];
  let k=num[1];
  let a=userInput[1].split(" ").map(Number).sort();
  let count=1;
  
  for(i=0;i<a.length;i++)
  {
      if(a[i]===k)
      {
          count=1;
          break;
      }
      else
        count=0;
  }
  
  if(count===1)
  {
      console.log("yes");
  }
  else
  {
      console.log("no");
  }
  
  //end-here
});
