function hurdleJump(hurdles, jumper){
let check = true
for( let hurdle of hurdles  ){
    if( hurdle > jumper  ){
        check = false
    }
}
return check
}



console.log(hurdleJump([1, 2, 3, 4, 5], 5) )
console.log(hurdleJump([5, 5, 3, 4, 5], 3))
console.log(hurdleJump([5, 4, 5, 6], 10))
