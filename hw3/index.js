/* Function #1 - Maximum digit */
const maxDigit = function getMaxDigit(number) {
    let result = +number.charAt(0);
    for (let i = 1; i < number.length; i++) {
        if (+number.charAt(i) > result) {
            result = +number.charAt(i)
        } else continue
    }
    return result
};

/* Function #2 - Number to degree */
const numberDegree = function getNumberDegree(number, degree) {
    let result = +number;

    if (+degree === 1) return result;
    else if (+degree >= 2) {
        for (let i = 2; i <= +degree; i++) {
            result *= number
        }
        return result;
    } else if (+degree === -1) return (1 / result);
    else if (+degree <= -2) {
        for (let i = -2; i >= +degree; i--) {
            result = 1 / (result * number)
        }
        return result;

    }
}

/* Function #3 - Name formatting */
const nameFormatted = function getNameFormatted(name) {
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
}


/* Fucntion #4 - Net salary calculation */
const netSalary = function getNetSalary(salary, tax = 0.195) {
    return +(salary * (1 - tax)).toFixed(2);
}

/* Function #5 - Random number in the range from N to M */
const randomIntegerInRange = function getRandomNumber(n, m) {
    return Math.round(n + Math.random() * m)
}

/* Function #6 - Count letter in a word */
const letterCount = function countLetter(word, letter) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word.toLowerCase().charAt(i) === letter.toLowerCase()) counter++;
    }

    return counter
}

/* Function #7 - Currency convert */
const convertedCurrency = function convertedCurrency(sum) {
    const rate = 28.14;

    if (sum.charAt(sum.length - 1) === '$') {
        return `${(+sum.substring(0, (sum.length - 1)) * rate).toFixed(2)} uah`;
    } else if (sum.toLowerCase().substring((sum.length - 3), sum.length) === 'uah') {
        return `${(+sum.substring(0, (sum.length - 3)) / rate).toFixed(2)} $`;
    } else return 'Please check your input'
}

/* Function #8 - Random password generator */
const randomPassword = function getRandomPassword(length = 8) {
    if (+length > 0) {
        let password = '';
        for (let i = 0; i < length; i++) password += randomIntegerInRange(0, 9);
        return password;
    } else return 'The password length should be a positive number'
}

/* Function #9 - Letters deletion */
const stringAfterDeletion = function deleteLetters(string, letter) {
    const array = string.toLowerCase().split('');
    let index = array.indexOf(letter.toLowerCase());

    while (index !== -1) {
        array.splice(index, 1);
        index = array.indexOf(letter.toLowerCase());
    }
    return array.join('');
}

/* Function #10 - Palindrom check */
const isPalindrom = function checkOnPalindrom(string) {
    const noSpacesString = stringAfterDeletion(string, ' ');
    const palindromArray = noSpacesString.split('').reverse();
    const palindromString = palindromArray.join('');
    return noSpacesString === palindromString;
}

/* Function #11 - Duplicates deletion */
const noDuplicatesString = function deleteDuplicateLetter(string) {
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
    `Function #1 with the argument '5698454163'resulted in: ${maxDigit('5698454163')}<br>
Function #2 with the arguments 12 and 3 (12 to degree 3)resulted in: ${numberDegree(12,3)}<br>
Function #3 with the argument 'mAryANN' resulted in: ${nameFormatted('mAryANN')}<br>
Function #4 with the argument 1000 resulted in: ${netSalary(1000)}<br>
Function #5 with the arguments 0 and 100 resulted in: ${randomIntegerInRange(0,100)}<br>
Function #6 with the arguments 'MissisipinlesS' and 's' resulted in: ${letterCount('MissisipinlesS','s')}<br>
Function #7 with the argument 300$ resulted in: ${convertedCurrency('300$')}<br>
Function #8 with the argument resulted in: ${randomPassword()}<br>
Function #9 with the argument 'Bart has blue pants' and 's' resulted in: ${stringAfterDeletion('Bart has blue pants', 's')}<br>
Function #10 with the argument 'Live not on evil' resulted in: ${isPalindrom('Live not on evil')}<br>
Function #11 with the argument 'I will not shoot Mr Berns' resulted in: ${noDuplicatesString('I will not shoot Mr Berns')}<br>
`)