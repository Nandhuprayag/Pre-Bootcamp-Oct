const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
 inp.on("line", (data) => {
  userInput.push(data);
 });
  inp.on("close" ,() => {
 
    //Declare a variable and split the Value
    var number=userInput[0].split(" ");
    //save the split variable in the new variable called  a 
    var a=number[0];
    //Condition for checking the number is Even or odd 
    if(a %2 === 0)
    {
        console.log("The Number is Even")
    }else
    {
        console.log("The Number is Odd")
    }
 
 
 
});