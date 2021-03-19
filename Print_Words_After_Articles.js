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
  
  let s=userInput[0].split(" ");
  let str=[];
  
  
  for(i=0;i<s.length;i++)
  {
      if(s[i]==="a" || s[i]==="an" || s[i]==="the" || s[i]==="A" || s[i]==="An" || s[i]==="The")
      {
          str.push(s[i+1]);
      }
  }
  
  if(str.length>0)
  {
      console.log(str.join(" "));
  }
  else
  {
      console.log(-1);
  }
  
});