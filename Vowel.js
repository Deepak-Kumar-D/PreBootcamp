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
  let vow=0;
  
  for(i=0;i<n.length;i++)
  {
      if(n[i]==="a"||n[i]=="e"||n[i]=="i"||n[i]=="o"||n[i]=="u")
      {
          vow=1;
          break;
      }
  }
  
  if(vow===1)
  {
      console.log("yes");
  }
  else
  {
      console.log("no");
  }

  //end-here
});