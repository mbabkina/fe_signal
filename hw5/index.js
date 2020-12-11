    const testArray = [1, 2, -4, 5, 8, 6, 3, 5, 7, 8, 7, 5.1];
    const testStringBadWords = "Are you fucking kidding my shit out?";
    const testStringDivide = 'Mississipi';
    const testStringShuffle = 'bunny';

    /* Function 1 - Get random Array */

    const randomArray = (length, min, max) =>
        Array.from({ length: length }, el => (Math.round(min + Math.random() * max)))


    /* Function 2 - Get moda */
    /* const arrayForModa = [1, 2, 4, 5, 8, 6, 3, 5, 7, 8, 7, 5];
        const integerArray = array.filter((number) => Number.isInteger(number));

    const moda = function getModa(integerArray) {
        arrayForModa.filter((number) => {
                return arrayForModa[].isInteger()
            })

        let counter = 0;
        let index = Null;
        for (let i = 0; i < arrayForModa.length; i++)
            arrayForModa.filter((number) => {
                return
            })
    } */

    /* Function 3 - Get Average */

    const average = (array) => {
        const integerArray = array.filter((number) => Number.isInteger(number));

        const sum = integerArray.reduce((summedArray, number) => {
            return summedArray + number;
        }, 0);

        return +(sum / integerArray.length).toFixed(2);
    }


    /* Function 4 - Get Median */

    const median = (array) => {
        const integerArray = array.filter((number) => Number.isInteger(number));

        const sortedArray = integerArray.sort((startChar, endChar) => {
            return (startChar - endChar);
        });


        const n = sortedArray.length;

        return (n % 2 === 0) ?
            (sortedArray[n / 2] + sortedArray[n / 2 + 1]) / 2 :
            sortedArray[Math.ceil(n / 2)]
    }


    /* Function 5 - Filter evens from a string */

    const evensArray = (numbers) => numbers.filter(el => (el % 2 === 0))

    /* Function 6 - Count positive numbers */

    const countPositiveNumbers = (numbers) => numbers.filter(el => (el > 0)).length

    /* Function 7 - Get numbers divided by N (divider) */

    const numbersDividedByN = (numbers) => {
        const divider = 5;
        return numbers.filter(number => (number % divider === 0))
    }


    /* Function 8 - Bad words hiding */
    const removedBadWords = (string) => {
        const array = string.split(' ');

        const badWords = ['fuck', 'shit', 'fucking', 'fucker']

        for (let i = 0; i < badWords.length; i++) {

            let indexBad = array.findIndex((word) => {
                return word === badWords[i]
            });

            array[indexBad] = '****';

        }

        return array.join(' ');
    }


    /* Function 9 - Divide the word by 3 letters */

    const divideByThree = (word) => {
        let string = word.toLowerCase().trim();
        const result = [];

        do {
            result.push(string.slice(0, 3));
            string = string.slice(3);
        } while (string.length > 3);

        if (string.length > 0) result.push(string);

        return result;
    }


    /* Function 10 - Get combinations */





    console.log('Here are the initial data:');
    console.log(`Array for testing is ${testArray}`)
    console.log(`The sentence with bad words for testing is ${testStringBadWords}`)
    console.log(`The string for division is ${testStringDivide}`)
        /* console.log(`The string for combinations testing is ${testStringShuffle}`) */

    console.log('And here are the results:');
    console.log(`The random array : ${randomArray(10, 5, 50)}`);
    console.log(`The average from the test array: ${average(testArray)}`);
    console.log(`The median from test array: ${median(testArray)}`);
    console.log(`The even numbers from test array: ${evensArray(testArray)}`);
    console.log(`Quantity of positive numbers from test array: ${countPositiveNumbers(testArray)}`);
    console.log(`The numbers even to 5 are: ${numbersDividedByN(testArray)}`);
    console.log(`Corrected string with hidden bad words is: ${removedBadWords(testStringBadWords)}`);
    console.log(`The string didvided by 3 letters is: ${divideByThree(testStringDivide)}`);