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
var x=false;
var y=true;
var Check=function()
{
  console.log(x && y);
};
Check();

  //end-here
});