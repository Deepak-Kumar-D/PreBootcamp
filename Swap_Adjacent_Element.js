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
  let z=userInput[1].split(" ").map(Number);
  
  for(i=1;i<z.length;i=i+2)
  {
      let temp=z[i];
     z[i]=z[i-1];
     z[i-1]=temp;
  }
 
  console.log(z.join(" "));
  
  //end-here
});