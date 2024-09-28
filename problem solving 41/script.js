

function isvowel( letter ){
return Boolean (['a', 'e', 'i', 'o', 'u'].includes(letter))

}



function split(str) {
	let result = ""
    for ( let lett of str ){
     if ( isvowel(lett) ){
        result +=lett
     }


    }
    for ( let lett of str ){
        if( ! isvowel (lett) ){
            result +=lett
        }
    }
    return result
}


console.log(split("abcde")) 

console.log(split("Hello!")) 

console.logsplit("What's the time?") 