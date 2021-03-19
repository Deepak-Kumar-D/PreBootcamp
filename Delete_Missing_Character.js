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
  
  let a=userInput[0].split("");
  let obj={};
  
  for(i=0;i<a.length;i++)
  {
      if(a[i] in obj)
      {
          obj[a[i]]=obj[a[i]]+1;
      }
      else
      {
          obj[a[i]]=1;
      }
  }
  
  let str=[];
  
  for(let keys in obj)
  {
      if(obj[keys]==1)
      {
          str.push(keys);
      }
  }
  
  console.log(str.join(""));

  //end-here
});