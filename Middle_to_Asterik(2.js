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
  
  let S=userInput[0].split("");
  
  if(S.length%2===0)
  {
      S[Math.round(S.length/2)]="*";
      S[Math.round(S.length/2)-1]="*";
  }
  else
  {
      S[Math.round(S.length/2)-1]="*";
  }

  console.log(S.join(""));

  //end-here
});