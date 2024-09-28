function areaShape(b, h, sh) {
	if( sh =='triangle'){
        return 0.5 *b*h
    }

    else if(sh =='parallelogram'){
        return b*h
    }
}

console.log(areaShape(2, 3, "triangle"))
console.log(areaShape(8, 6, "parallelogram"))
console.log(areaShape(2.9, 1.3, "parallelogram"))