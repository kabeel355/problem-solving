function squaresSum(n) {
	let result = 0
    for( let i = 1 ; i <= n ; i++ ){
        result += (i ** 2)
    }
return result
}




 
console.log(squaresSum(3))

console.log(squaresSum(12)) 

console.log(squaresSum(13)) 
