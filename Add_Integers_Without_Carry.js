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
  
  let num=userInput[0].split(" ");
  let n=num[0].split("").map(Number);
  let m=num[1].split("").map(Number);
  let sum=0;
  let carry=[];
  let check=0;
  
  for(i=0;i<n.length;i++)
  {
      sum=n[i] + m[i];
      check=sum%10;
      carry.push(check);
  }
  
  for(j=0;j<carry.length;j++)
  {
      if(carry[0]!==0)
      {
          break;
      }
      else if(carry[j]===0 && carry[j]!==carry.length-1)
      {
          carry.splice(j,1);
      }
  }
  
  console.log(carry.join(""));

  //end-here
});