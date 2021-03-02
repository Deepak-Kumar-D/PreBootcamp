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
  var a=+userInput[0];
  var b=+userInput[1];
  var c=+userInput[2];
  //var str="is greater";
  
  if(a>b){
      if(a>c)
      {
          console.log(a+" is greater than "+b+ " & "+c+" . ");
      }
      else
      {
          console.log(c+" is greater than "+a+ " & "+b+" . ");
      }
  }
  else if(b>c)
  {
      console.log(b+" is greater than "+a+ " & "+c+" . ");
  }
  else
  {
      console.log(c+" is greater than "+a+ " & "+b+" . ");
  }

  //end-here
});