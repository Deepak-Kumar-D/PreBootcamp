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
  
  let num=userInput[0].split(" ").map(Number);
  let n=num[0];
  let k=num[1];
  let a=userInput[1].split(" ").map(Number);
  let diff=0;
  let arr=[];
  
  for(i=1;i<a.length;i++)
  {
      if(i===a.length-1)
      {
          if(a[i-1]>a[i])
          {
              diff=a[i-1]-a[i];
          }
          else
            diff=a[i]-a[i-1];
            
          if(diff>k)
          {
              arr.push(1);
          }
          else
          {
              arr.push(0);    
          }
          
          if(a[0]>a[i])
          {
              diff=a[0]-a[i];
          }
          else
            diff=a[i]-a[0];
            
          if(diff>k)
          {
              arr.push(1);
          }
          else
            arr.push(0);
      }
      else
      {
          if(a[i-1]>a[i])
          {
              diff=a[i-1]-a[i];
          }
          else
            diff=a[i]-a[i-1];
            
          if(diff>k)
          {
              arr.push(1);
          }
          else
          {
              arr.push(0);   
          }
      }
  }
  
  console.log(arr.join(" "));
  
  //end-here
});
