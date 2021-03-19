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
  
  let n=userInput[0].split(" ");
  let total=+n[0];
  let ram=+n[1];
  let stud=userInput[1].split(" ").map(Number);
  let ind=0;
  
  if(total===stud.length)
  {
      for(i=0;i<total;i++)
      {
          if(ram===stud[i])
          {
              ind=i;
              break;
          }
          else
          {
              ind=-1;
          }
      }
  }
  
  
  console.log(ind);
  
});