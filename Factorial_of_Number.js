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

var n=5;
var f=1;

var fact=function()
{
  for(i=1;i<=n;i++)
  {
    f=f*i;
  }
  console.log(f);
}

fact();

  //end-here
});