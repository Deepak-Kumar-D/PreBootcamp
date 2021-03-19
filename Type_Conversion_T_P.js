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
  
  let a=userInput[0].split("");
  let T=+userInput[1];
  let P=+userInput[2];
  let str=[];
  
  if(T==1)
  {
      for(i=1;i<=a.length;i++)
      {
          if(i%P===0)
          {
             str.push(a[i-1].toLowerCase());
          }
          else
          {
              str.push(a[i-1]);
          }
      }
  }
  else if(T==2)
  {
      for(i=1;i<=a.length;i++)
      {
          if(i%P===0)
          {
              str.push(a[i-1].toUpperCase());
          }
          else
          {
              str.push(a[i-1]);
          }
      }
  }

console.log(str.join(""));

  //end-here
});