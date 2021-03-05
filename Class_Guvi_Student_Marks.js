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

function guvi_student()
{
    this.mark1="Nill";
    this.mark2="Nill";
    this.marks=function()
    {
        return "Mark 1:"+this.mark1+"\n"+"Mark 2:"+this.mark2+"\n";
    }
}

var student1=new guvi_student();
student1.mark1=20;
student1.mark2=30;

console.log("Student 1"+"\n"+student1.marks());

var student2=new guvi_student();
student2.mark1=50;
student2.mark2=45;

console.log("Student 2"+"\n"+student2.marks());
  //end-here
});