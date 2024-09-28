function sayHelloBye(name, num) {
	if ( num === 1 ){
        return 'hallo '  +  name
    }

    else if ( num ===0  ){
        return 'bye '  +  name
    }
   
}


console.log(sayHelloBye("alon", 1))
console.log(sayHelloBye("Tomi", 0))
console.log(sayHelloBye("jose", 0))