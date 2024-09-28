function uploadCount(dates, month) {
	let count = 0    
    for( let date of dates ){
        if( date.split("")[0]==month ){
            count++
        }
    }
    return count
}


console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept") )
console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct") )
