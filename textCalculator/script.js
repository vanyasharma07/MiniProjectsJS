const prompt = require("prompt-sync")()
let num1, num2;
while(true){
    const num1 = parseFloat(prompt("enter number 1"))
    if(isNaN(num1)){
        console.log("invalid output")
    }
    else break;
}
while(true){
    const num2 = parseFloat(prompt("enter number 2"))
    if(isNaN(num1)){
        console.log("invalid output")
    }
    else break;
}
const operator = prompt("enter sign: ")
let result;
let valid = true
switch(operator){
    case "+":
        result = num1+num2
        break;
    case "-":
        result = num1-num2
        break;
    case "*":
        result = num1*num2
        break;
    case "%":
        result = num1/num2
        break;
    default:
        console.log("inavlid")
        valid = false
        break;
    }

if (valid == true){
    console.log(result);
}