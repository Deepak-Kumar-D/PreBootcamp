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
  
  let s=userInput[0].split("");
  let str=[];
  let sum=0;
  
  for(i=0;i<s.length;i++)
  {
      str.push(s[i].charCodeAt(s[i]));
  }
  
  for(i=0;i<str.length;i++)
  {
      sum=sum+str[i];
  }
  
  console.log(sum);

  //end-here
});