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
  
  let s=userInput[0].split(" ");
  
  if(s[0]==="R" && s[1]==="P" || s[0]==="P" && s[1]==="R")
  {
      console.log("P");
  }
  else if(s[0]==="R" && s[1]==="S" || s[0]==="S" && s[1]==="R")
  {
      console.log("R");
  }
  else if(s[0]==="P" && s[1]==="S" || s[0]==="S" && s[1]==="P")
  {
      console.log("S");
  }
  else
  {
      console.log("D");
  }

  //end-here
});