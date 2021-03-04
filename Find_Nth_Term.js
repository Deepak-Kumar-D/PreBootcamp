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
let term=0;

if(n===0)
{
    console.log(0);
}
else if(n<0)
{
    console.log("Error");
}
else
{
    term=n*n;
    console.log(term);
}

  //end-here
});