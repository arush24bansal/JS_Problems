const starPattern = (num) => {
    const star = '*'
    for(i = 1; i <= num; i++){
        console.log(star.repeat(i));
    }
}

starPattern(6);