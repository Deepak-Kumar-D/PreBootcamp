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
  let num=userInput[1].split(" ").map(Number);
  
  for(i=0;i<num.length;i++)
  {
      if(i%2===0)
      {
          for(j=i+1;j<num.length;j++)
          {
              if(j%2===0)
              {
                  if(num[i]>num[j])
                  {
                      var temp=0;
                      temp=num[i];
                      num[i]=num[j];
                      num[j]=temp;
                  }
              }
          }
      }
  }
  
  console.log(num.join(" "));
  //end-here
});