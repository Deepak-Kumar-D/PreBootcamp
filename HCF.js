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

let number=userInput[0].split(" ");
let a=+number[0];
let b=+number[1];
let HCF=0;

for(i=1;i<=a&&i<=b;i++)
{
    if(a%i===0 && b%i===0)
    {
        HCF=i;
    }
}

console.log(HCF);
  //end-here
});