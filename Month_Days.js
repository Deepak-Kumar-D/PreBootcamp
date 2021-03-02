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
  
  let month=+userInput[0];
  if(month==1)
  {
      console.log("31");
  }
  else if(month==2)
  {
      console.log("28");
  }
  else if(month==3)
  {
      console.log("31");
  }
  else if(month==4)
  {
      console.log("30");
  }
  else if(month==5)
  {
      console.log("31");
  }
  else if(month==6)
  {
      console.log("30");
  }
  else if(month==7)
  {
      console.log("31");
  }
  else if(month==8)
  {
      console.log("31");
  }
  else if(month==9)
  {
      console.log("30");
  }
  else if(month==10)
  {
      console.log("31");
  }
  else if(month==11)
  {
      console.log("30");
  }
  else if(month==12)
  {
      console.log("31");
  }
  else
  {
      console.log("Error");
  }

  
  //end-here
});