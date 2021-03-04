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
let table=0;
let arr=[];

if(n===0)
{
    console.log("NULL");
}
else
{
    for(i=1;i<=n;i++)
    {
        table=9*i;
        arr.push(table);
    }
    console.log(arr.join(" "));
}
  //end-here
});