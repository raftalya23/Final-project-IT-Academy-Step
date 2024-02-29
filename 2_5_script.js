let usersArray = [
  ['Elene', 'boni12', 400],  
  ['Alisa', 'tuna5', 700],

]



const checkBalance = (userName, password) =>{
  for(let i = 0; i < usersArray.length; i++){
    if(userName.toLowerCase() == usersArray[i][0].toLowerCase() && password == usersArray[i][1]){
      return `${usersArray[i][0]}'s balance is ${usersArray[i][2]}$`
    }
  }
  return "User not found";

}


const withdrawMoney = (userName, password, amount) =>{
  for(let i=0; i < usersArray.length; i++){
    if(amount <= parseInt(usersArray[i][2])){
      if(userName.toLowerCase() == usersArray[i][0].toLowerCase() && password == usersArray[i][1]){
        return `${usersArray[i][0]}'s balance left ${usersArray[i][2] - amount}$`
      }
    } else{
      return "Not enough balance"
    }
  }
  return "User not found";
}



const depositMoney = (userName, password, amount) =>{
  for(let i=0; i < usersArray.length; i++){
        if(userName.toLowerCase() == usersArray[i][0].toLowerCase() && password == usersArray[i][1]){
        return `${usersArray[i][0]}'s new balance is ${parseInt(usersArray[i][2]) + parseInt(amount)}$`
      }
  }
  return "User not found";
}





const bankOperation = (operation) =>{
  operation = prompt("Select Operation: Balance, Withdraw, Deposit")
  if(operation.toLowerCase() === "balance") {
    alert(checkBalance(prompt("Enter name"), prompt("Enter password")))
  }
  if(operation.toLowerCase() === "withdraw") {
    alert(withdrawMoney(prompt("Enter name"), prompt("Enter password"), prompt("How much money you want to withdraw")))
  }
  if(operation.toLowerCase() === "deposit") {
    alert(depositMoney(prompt("Enter name"), prompt("Enter password"), prompt("How much money you want to deposit")))
  }

}

bankOperation()