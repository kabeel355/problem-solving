function arithmeticOperation(string) {
let first = string.split("")[0]
let opra = string.split("")[1]
let last = string.split("")[2]

  if  (opra == "+"){
    return Number(first)+Number(last)
  }

  else if  (opra == "-"){
    return Number(first)-Number(last)
   }
   else if  (opra == "*"){
    return Number(first)*Number(last)
   }
   else if  (opra == "/"){
    return Number(first)/Number(last)
   }
}


console.log(arithmeticOperation("12 + 12")) 

console.log(arithmeticOperation("12 - 12"))

 
console.log(arithmeticOperation("12 * 12"))

console.log(arithmeticOperation("12 / 0")) 