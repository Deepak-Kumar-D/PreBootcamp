const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = []

inp.on("line", (data) => {
  userInput.push(data)
});


inp.on("close",() => {
    
    
    var arr=userInput.map(function(val)
    {
        return (val).split(" ").map(function(num)
        {
            return Number(num);
        });
    })
    console.log(arr.join("\n"));
    
    for(i=0;i<arr.length;i++)
    {
        var min=arr[i][0];
        var max=arr[i][0];
        for(j=0;j<arr[i].length;j++)
        {
            if(min>arr[i][j])
            {
                min=arr[i][j];
            }
            if(max<arr[i][j])
            {
                max=arr[i][j];
            }
        }
        console.log("Minimum: "+min+" Maximum: "+max);
    }
    
    for(i=0;i<arr.length;i++)
    {
        var row=0;
        var col=0;
        var m=arr[i][0];
        var n=arr[i][0];
        for(j=0;j<arr[i].length;j++)
        {
            row=row+arr[i][j];
            col=col+arr[j][i];
            if(col>row)
            {
                m=row;
            }
            else
               m=col; 
            
            if(col<row)
            {
                n=row;
            }
            else
                n=col;
            
        }
        console.log("\nSum of row: "+row," Sum of Coloumn: "+col);
        console.log("Min: "+m+" Max: "+n);
    }
});