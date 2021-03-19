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
  
  let n=userInput.map(function(val){
      return Number(val);
  });
  let mul=0;
  
  if(n%7===0)
  {
      console.log("yes");
  }
  else
    console.log("no");

//end-here
});