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


var vowels=function()
{
   var n=userInput[0];
   var j=0;
   for(i=0;i<=n.length;i++)
   {
       if(n[i]==="a")
       {
           j++;
       }
       else if(n[i]==="e")
       {
           j++;
       }
       else if(n[i]==="i")
       {
           j++;
       }
       else if(n[i]==="o")
       {
           j++;
       }
       else if(n[i]==="u")
       {
           j++;
       }
       else
        continue;
   }
   console.log(j);
}
vowels();

  //end-here
});