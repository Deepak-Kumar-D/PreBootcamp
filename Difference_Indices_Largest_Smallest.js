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
  
  let num=+userInput[0];
  let n=userInput[1].split(" ").map(Number);
  let large=0;
  let small=n.length;
  let local=0;
  let locas=0;
  let diff=0;
  
  for(i=0;i<n.length;i++)
  {
     if(n[i]>large)
     {
         large = n[i];
         local = i;
     }
     
     if(n[i]<small)
     {
         small = n[i];
         locas = i;
     }
  }
  
  diff=local-locas;
  
  console.log(diff);
 
  //end-here
});