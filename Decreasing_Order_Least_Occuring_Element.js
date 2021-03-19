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
  let obj={};
  
  for(i=0;i<num.length;i++)
  {
      if(num[i] in obj)
      {
          obj[num[i]]=obj[num[i]]+1;
      }
      else
      {
          obj[num[i]]=1;
      }
  }
  
  let arr=[];
  
  for(var check in obj)
  {
      arr.push([check,obj[check]]);
  }
  
  arr.sort(function(a,b){
      return a[1]-b[1];
  })
  
  let a=[];
  
  for(i=1;i<arr.length;i++)
  {
      var min=arr[i][1];
      if(min>arr[i-1][1])
      {
          a.push(arr[i-1][0]);break;
      }
      else if(min===arr[i-1][1])
      {
          a.push(arr[i-1][0]);
          a.push(arr[i][0]);break;
      }
  }

  console.log(a.reverse().join(" "));

  //end-here
});