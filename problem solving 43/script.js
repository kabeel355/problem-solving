


function getcase( str ){
    let special = ["11" , "12" , "13"]
    if ( special.includes( str ) ){
        return "-TH"
    }

    else {
        if ( str [str.length - 1]==="1" ){
            return "-ST"
        }
       else if ( str [str.length - 1]==="2" ){
            return "-ND"
        }
        else if ( str [str.length - 1]==="3" ){
            return "-RD"
        }
        else {
            return "-TH"
        }
    }

}







function returnEndOfNumber(num) {
	let str = String( num )
    return num+ getcase ( str.slice( -2 ) ) 
}

console.log(returnEndOfNumber(553)) 
console.log(returnEndOfNumber(34)) 

console.log(returnEndOfNumber(1231)) 

console.log(returnEndOfNumber(22)) 

console.log(returnEndOfNumber(412)) 