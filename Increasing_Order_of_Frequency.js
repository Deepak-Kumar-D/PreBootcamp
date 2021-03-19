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
  let num=userInput[1].split(" ").map(Number);
  let obj={};
  
  for(k=0;k<num.length;k++)
  {
      if(num[k] in obj)
      {
          obj[num[k]]=obj[num[k]]+1;
      }
      else
      {
          obj[num[k]]=1;
      }
  }
  
  let str=[];
  
  for(var check in obj)
  {
      str.push([check,obj[check]]);
  }
  
  str.sort(function(a,b){
      return a[1]-b[1];
  })
  
  let a=[];
  
  for(i=0;i<str.length;i++)
  {
      a.push(str[i][0]);
  }
  
  console.log(a.join(" "));
  
  //end-here
});