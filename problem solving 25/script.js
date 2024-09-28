function nTablesPlusOne (num){
    let result = ""
    for ( i=1 ; i <=10 ; i++ ){
        result += (num * i) + 1
        result += ","
    }
    return result
}




console.log(nTablesPlusOne(7) ) 
console.log(nTablesPlusOne(1))  
console.log( nTablesPlusOne(3))


