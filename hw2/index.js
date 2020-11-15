let numberStartFrom = prompt('Please enter integer, which marks the start point of caluclations');

let numberEndWith = prompt('Please enter integer, which marks the end point of caluclations');

const skipEven = confirm('Do you want to skip even numbers?');

N = parseInt(numberStartFrom, 10);
M = parseInt(numberEndWith, 10);

let result = null;

for (let i = numberStartFrom; !(isNaN(numberStartFrom)) && !(isNaN(numberEndWith)) && i <= numberEndWith; i++) {
    if (skipEven) {
        for (let j = i;
            (j % 2) !== 0; j++) {
            result += j;
        }
    } else {
        result += i;
    }
}

alert(result ? result : 'Please check your inputs');