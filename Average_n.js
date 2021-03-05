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

var n=[4,6,2,3,5];
var avg=0;
var sum=0;
var average=function()
{
    if(n.length<10)
    {
        for(i=0;i<n.length;i++)
            {
                sum +=n[i];
            } 
            avg=sum/n.length;
            console.log(avg);
    }
    else
        return 0;
}
average();

  //end-here
});