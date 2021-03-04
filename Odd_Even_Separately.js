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

let n=userInput[0].split("");
let a=[];
let b=[];

for(i=0;i<n.length;i++)
{
    let int=+n[i];
    if(int%2===0)
    {
        a.push(int);
        a.sort();
    }
    else
    {
        b.push(int);
        b.sort();
    }
}

console.log(a.join(" "));
console.log(b.join(" "));

  //end-here
});