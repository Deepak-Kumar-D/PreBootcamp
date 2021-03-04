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

let number=userInput[0].split("");
let n=0;

for(i=0;i<number.length;i++)
    {
        n=n+parseInt(number[i]);
    }
    console.log(n);

  //end-here
});