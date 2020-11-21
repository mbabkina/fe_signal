let numberStartFrom = +prompt('Please enter integer, which marks the start point of calculations');
while (!Number.isInteger(numberStartFrom)) numberStartFrom = +prompt('Please enter INTEGER nubmers only');

let numberEndWith = +prompt('Please enter integer, which marks the end point of caluclations');
while (!Number.isInteger(numberEndWith)) numberEndWith = +prompt('Please enter INTEGER nubmers only');
while (numberEndWith <= numberStartFrom) numberEndWith = +prompt('Please enter number BIGGER than start number');

const skipEven = confirm('Do you want to skip even numbers?');

let result = null;

for (let i = numberStartFrom; i <= numberEndWith; i++) {
    if (skipEven && i % 2 === 0) {
        continue
    }
    result += i;
}


document.writeln(`The sum is: ${result}`);