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
  let str=[];
  let largest=0;
  
  for(i=0;i<a.length;i++)
  {
      if(isNaN(a[i]))
      {
          continue;
      }
      else
      {
          str.push(a[i]);
      }
  }
  
  for(i=0;i<str.length;i++)
  {
      if(+str[i]>largest)
      {
          largest=+str[i];
      }
  }
  
  console.log(largest);
  

  //end-here
});