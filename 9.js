const findRepeat = (str) => {
    const string = str.toLowerCase()
    for(let a of string){
        if(string.indexOf(a) !== string.lastIndexOf(a)){
            console.log(a);
            break;
        }
    }
}

findRepeat('hello');