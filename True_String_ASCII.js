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
  let arr=[];
  
  for(i=0;i<str.length;i++)
  {
      if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" || str[i]==="A" || str[i]==="E" || str[i]==="I" || str[i]==="O" || str[i]==="U")
      {
          arr.push(str[i].charCodeAt(str[i]));
      }
  }
  
  let weight=0;
  
  for(k=0;k<arr.length;k++)
  {
      weight=weight+arr[k];
  }
  
  if(weight%8===0)
  {
      console.log(1);
  }
  else
  {
      console.log(0);
  }
  
});