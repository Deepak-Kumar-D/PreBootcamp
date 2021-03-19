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
  
  let A=userInput[0].split(" ").map(Number);
  let arr=[];
  
  for(i=2;i<=A;i++)
  {
      if(A%i===0 && A!=i)
      {
        arr[0]="yes";
        break;
      }
      else
        arr[0]="no";
        continue;
  }
  
  console.log(arr.join(""));
  
  //end-here
});