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

let num=userInput[0].split(" ");
let L=Number(num[0]);
let R=Number(num[1]);
count=0;

if(L<=R<=100000)
{
    for(i=L;i<=R;i++)
    {
        if(i===2 || i===3)
        {
            count +=1;
        }
        else
        {
            for(j=2;j<=i;j++)
            {
                
                if(i%j===0 && i!=j)
                {
                    break;
                }
                else if(i===j)
                {
                    count+=1;
                }
            }
        }
    }
}

console.log(count);

  //end-here
});