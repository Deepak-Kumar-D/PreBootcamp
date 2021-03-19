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
  
  let s=userInput[0].split("");
  
  if(s[0]==="a" || s[0]==="A")
  {
      if(s[Math.round(s.length/2)-1]==="m" || s[Math.round(s.length/2)-1]==="M")
      {
          if(s[s.length-1]==="z" || s[s.length-1]==="Z")
          {
              console.log(1);
          }
          else
          {
              console.log(0);
          }
      }
      else
      {
          console.log(0);
      }
  }
  else
  {
      console.log(0);
  }

  //end-here
});