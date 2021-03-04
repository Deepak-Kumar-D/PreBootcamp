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

let n=[10,10,10,20,20,30,30,30,30,30,40,50,50];
let count={};

for(i=0;i<n.length;i++)
{
    if(count[n[i]]===undefined)
    {
        count[n[i]]=1;
    }
    else
    {
        count[n[i]]=count[n[i]]+1;
    }
}
console.log(count);
  //end-here
});