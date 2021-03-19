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
  
  let str=userInput[0].split("");
  let count=0;
  let arr=[];
  
  for(i=0;i<str.length;i++)
  {
      if(isNaN(str[i]))
      {
          arr.push(str[i]);
      }
      else
      {
          count +=+str[i];
      }
  }
  
  arr.push(count);
  
  console.log(arr.join(""));
  
});