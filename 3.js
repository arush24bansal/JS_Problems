const digisum = (num) => {
    const string = num.toString();
    const length = string.length;
    sum = 0;
    for(i = 0; i < length; i++ ){
        sum += parseFloat(string.charAt(i));
    } 
    console.log(sum);
}

digisum(12234);