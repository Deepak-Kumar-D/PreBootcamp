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

var n=15;
var sum=0;

var calculate=function()
{
  for(i=0;i<10;i++)
  {
    if(n<10)
      break;
    else
      sum +=i;
  }
  console.log(sum);
}
calculate();

  //end-here
});