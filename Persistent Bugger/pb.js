function persistence(num) {
    let counter = -1;
    mulDigits(num);
    function mulDigits(num){
        counter++;
        return (num < 9) ? null : mulDigits((''+num).split('').reduce((a,b) => a*b));
    }
    return counter;
}


