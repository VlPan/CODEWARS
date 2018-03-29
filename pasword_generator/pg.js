/*
6 - 20 characters long
contains at least one lowercase letter
contains at least one uppercase letter
contains at least one number
contains only alphanumeric characters (no special characters)
*/


function passwordGen(){
    let pass = [];
    randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    let long = randomInt(6,21);
    let max = long - 3;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let randNum, randomLetter;
    pass.push(alphabet[randomInt(0, alphabet.length - 1)].toUpperCase());
    pass.push(alphabet[randomInt(0, alphabet.length - 1)]);
    pass.push(randomInt(0, 9));

    for(let i = 0; i < max; i++){
        randNum = randomInt(0, 9);

        let isUpper = randomInt(0,5);
        if(isUpper === 0){
            randomLetter = alphabet[randomInt(0, alphabet.length - 1)].toUpperCase();
        }else{
            randomLetter = alphabet[randomInt(0, alphabet.length - 1)];
        }
        numOrLet = randomInt(0,2);
        numOrLet === 0 ? pass.push(randNum) : pass.push(randomLetter);
    }

    for(let i = 0; i < pass.length; i++){
        let randPos = randomInt(i, pass.length - 1)
        randEl = pass[randPos];
        let bubble = pass[i];
        pass[i] = randEl;
        pass[randPos] = bubble;
    }
    return pass.join('')
}


    console.log(passwordGen());


