const addElements = (arr) => {
    console.log(arr.reduce(function (a, b){
        return a + b
    }, 0))
}  

addElements([1, 2, 3, 4, 5])