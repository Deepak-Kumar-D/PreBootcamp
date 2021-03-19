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
  
  let a=userInput[0].split(" ");
  
  for(i=1;i<a.length;i++)
  {
      var curr=a[i];
      var prev=a[i-1];
      if(curr==prev)
      {
          a.splice(i-1,2)
      }
  }
  
  for(j=0;j<=a.length;j++)
  {
      var c=a[j];
      var p=a[j-1];
      if(c==p)
      {
          a.splice(j-1,2);
      }
  }
  
  if(a.length>0)
  {
      console.log(a.join(" "));
  }
  else
  {
      console.log(-1);
  }
  
  //end-here
});