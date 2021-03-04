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
let dec=Math.round(n);

if(dec==0)
{
    console.log("Zero");
}
else if(dec%2==0)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}

  //end-here
});