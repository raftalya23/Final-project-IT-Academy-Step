const calculator = (num1, num2, operation) => {
  if(operation == "+" || operation == "-" || operation == "*" || operation == "/"){
    if(operation == "+"){
      return num1 + num2
    } else if(operation == "-"){
      return num1 - num2
    } else if(operation == "*"){
      return num1 * num2
    } else if(operation == "/"){
      return num1 / num2
    }
  }else{
    alert("Please enter valid operation")
  }
}


const userNum1 = parseInt(prompt("Please enter first number"))
const userNum2 = parseInt(prompt("Please enter second number"))
const userOperation = prompt("Please enter one of the opertions: -, +, *, /")


const result = calculator(userNum1, userNum2, userOperation)

console.log(result)