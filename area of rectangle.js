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
  //declaring 2 variables length & breath
    var length=parseInt(userInput[0]);
    var breath=parseInt(userInput[1]);
    //create new variable Area = length*breath
    var area=length*breath;

// now printing the Output of area
  console.log(area);

  //end-here
});