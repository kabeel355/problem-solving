

function findIndex(arr, str) {
	for(let ind in arr){
        if(arr [ind]==str)
            return ind
    }
}






console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"))
console.log(findIndex(["a", "g", "y", "d"], "d"))
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))

















