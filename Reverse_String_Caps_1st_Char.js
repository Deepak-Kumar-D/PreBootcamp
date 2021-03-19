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
  
  let str=userInput[0].split("");
  let arr=str.reverse();
  
  let s=arr[0].toUpperCase()+arr.slice(1).join("");
  
  console.log(s);
});