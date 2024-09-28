function reverseComplement(rna) {
	let result = ""
   for ( let i = rna.lenght - 1 ; i > 0 ; i--){
    if( rna[i] === "A" ){
        result += "U"
    }
  else if( rna[i] === "C" ){
        result += "G"
 }

 else if( rna[i] === "G" ){
    result += "C"
}
else if( rna[i] === "U" ){
    result += "A"
}
   }


    return result
}


 console.log(reverseComplement("GUGU"))

console.log(reverseComplement("UCUCG")) 

console.log(reverseComplement("CAGGU")) 