/* Function #1 - Maximum digit */
const getMaxDigit = (number) => Math.max(...Array.from(String(number)));

/* Function #2 - Number to degree */
const getNumberDegree = (number, degree) => {
    let result = +number;

    if (+degree === 1) return result;
    else if (+degree >= 2) {
        for (let i = 2; i <= +degree; i++) {
            result *= number
        }
    } else if (+degree === -1) return (1 / result);
    else if (+degree <= -2) {
        for (let i = -2; i >= +degree; i--) {
            result = 1 / (result * number)
        }
    }
    return result;
}

/* Function #3 - Name formatting */
const getNameFormatted = (name) => (name.charAt(0).toUpperCase() +
    name.substring(1).toLowerCase());


/* Fucntion #4 - Net salary calculation */
const getNetSalary = (salary, tax = 0.195) => +(salary * (1 - tax)).toFixed(2);


/* Function #5 - Random number in the range from N to M */
const gatRandomIntegerInRange = (startNumber, endNumber) => Math.round(startNumber + Math.random() * endNumber);

/* Function #6 - Count letter in a word */
const countLetter = (word, letter) => {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word.toLowerCase().charAt(i) === letter.toLowerCase()) counter++;
    }

    return counter
}

/* Function #7 - Currency convert */
const convertedCurrency = (sum) => {
    const rate = 28.14;

    return (sum.charAt(sum.length - 1) === '$') ?
        (`${(+sum.substring(0, (sum.length - 1)) * rate).toFixed(2)} uah`) :
        (sum.toLowerCase().substring((sum.length - 3), sum.length) === 'uah') ?
        `${(+sum.substring(0, (sum.length - 3)) / rate).toFixed(2)} $` :
        'Please check your input'
}

/* Function #8 - Random password generator */
const getRandomPassword = (length = 8) => {
    if (+length > 0) {
        let password = '';
        for (let i = 0; i < length; i++) password += gatRandomIntegerInRange(0, 9);
        return password;
    } else return 'The password length should be a positive number'
}

/* Function #9 - Letters deletion */
const deleteLetters = (string, letter) => {
    const array = string.toLowerCase().split('');
    let index = array.indexOf(letter.toLowerCase());

    while (index !== -1) {
        array.splice(index, 1);
        index = array.indexOf(letter.toLowerCase());
    }
    return array.join('');
}

/* Function #10 - Palindrom check */
const checkOnPalindrom = (string) => (deleteLetters(string, ' ') === deleteLetters(string, ' ').split('').reverse().join(''));


/* Function #11 - Duplicates deletion */
const deleteDuplicateLetter = (string) => {
    const array = string.toLowerCase().split('');
    let letter;
    let index;

    for (i = 0; i < array.length;) {
        letter = array[i];
        index = array.indexOf(letter);
        if (array.slice(i + 1).includes(letter)) {
            while (index !== -1) {
                array.splice(index, 1);
                index = array.indexOf(letter);
            }
        } else i++;

    }
    return array.join('');
}


/* Results of all the functions */
document.writeln(
    `Function #1 with the argument '5698454163' resulted in: ${getMaxDigit('5698454163')}<br>
Function #2 with the arguments 12 and 3 (12 to degree 3) resulted in: ${getNumberDegree(12,3)}<br>
Function #3 with the argument 'mAryANN' resulted in: ${getNameFormatted('mAryANN')}<br>
Function #4 with the argument 1000 resulted in: ${getNetSalary(1000)}<br>
Function #5 with the arguments 0 and 100 resulted in: ${gatRandomIntegerInRange(0,100)}<br>
Function #6 with the arguments 'MissisipinlesS' and 's' resulted in: ${countLetter('MissisipinlesS','s')}<br>
Function #7 with the argument 300$ resulted in: ${convertedCurrency('300$')}<br>
Function #8 with the argument resulted in: ${getRandomPassword()}<br>
Function #9 with the argument 'Bart has blue pants' and 's' resulted in: ${deleteLetters('Bart has blue pants', 's')}<br>
Function #10 with the argument 'Live not on evil' resulted in: ${checkOnPalindrom('Live not on evil')}<br>
Function #11 with the argument 'I will not shoot Mr Berns' resulted in: ${deleteDuplicateLetter('I will not shoot Mr Berns')}<br>
`)