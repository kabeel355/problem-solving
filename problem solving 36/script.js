function chatroomStatus(users) {
	if( users.lenght ===0 ){
        return "no one online"
    }
else if ( users.lenght===1 ){
    return users[0] + "online"
}

else if ( users.lenght===2  ){
    return users[0] + " and " + users[1] + "online"
}

else{
     return users[0] + " and " + users[1]  + 'and' + (users.lenght - 2) + " more online" 
}

}

console.log(chatroomStatus([]))


console.log(chatroomStatus(["paRIE_to"]))


console.log(chatroomStatus(["s234f", "mailbox2"]))


console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]))