function gitmin( arr ){
    let smallest = arr[0]
    for( let item of arr ){
        if ( item < smallest ){
            smallest=item
        }
    }
    return smallest
}


function sumMinimums (arrs){
    let result = 0
    for( let arr of arrs ){
        result += gitmin( arr )
    }
    return result
}

console.log(sumMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100] ]))