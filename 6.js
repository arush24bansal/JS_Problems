const findElement = (element) => {
    arr = [10, 9, 8, 9, 6, 5, 4, 3, 2, 1, 0]
    if(arr.includes(element)){
        console.log(arr.indexOf(element));
    }else{
        console.log(null);
    }
}

findElement(11);
