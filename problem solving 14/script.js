

function relationToLuke(name){
    if( name=="Darth Vader"){
        return "Luke, I am your father."
    }

    else if(name=="Leia"){
          return "Luke, I am your sister."
    }
    else if(name=="Han"){
          return "Luke, I am your brother in law."
    }
    
}


console.log(relationToLuke("Darth Vader"))
console.log(relationToLuke("Leia"))
console.log(relationToLuke("Han"))