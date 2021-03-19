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
  
  if(s.length<=10000000)
  {
      for(i=0;i<s.length;i=i+2)
      {
          let temp=s[i];
          s[i]=s[i+1];
          s[i+1]=temp;
          str.push(s[i],s[i+1]);
      }
  }
  
  console.log(str.join(""));

  //end-here
});