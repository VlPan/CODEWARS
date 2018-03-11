function isSortedAndHow(array) {
    let shiftArr = [];
    for (let i = 0; i < array.length - 1; i++) {
        let current = array[i];
        let next = array[i + 1];

        shiftArr.push(current - next);
    }

    if (shiftArr.every(el => el > 0)) return 'yes, descending';
    else if (shiftArr.every(el => el < 0)) return 'yes, ascending';

    return 'no';
}

console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, -7, -8, -10]));
console.log(isSortedAndHow([4, 2, 30]));

