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

for(i=1;i<=n;i++)
    {
        console.log(i);
    }

  //end-here
});