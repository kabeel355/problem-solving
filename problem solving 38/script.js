function hackerSpeak(str) {
	let result = ""
    for( let letter of str ){
        
        if ( letter == "a" ){
            result +=4
         }
         else if (letter == "e"){
            result +=3
         }
         else if (letter == "i"){
            result +=1

         }

         else if (letter == "o"){
            result +=0

         }

         else if (letter == "s"){
            result +=5

         }

         else{
            result += letter
         }
        }
         return result
    }


    console.log(hackerSpeak("javascript is cool"))
    console.log(hackerSpeak("programming is fun"))
    console.log(hackerSpeak("become a coder"))
    
