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

for(i=n;i<=n;i--)
{
    if(i>0)
    {
        console.log(i);
    }
}

  //end-here
});