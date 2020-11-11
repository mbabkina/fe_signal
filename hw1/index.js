const priceApple = 15.678;
const priceOrange = 123.965;
const pricePear = 90.2345;

let totalSum = priceApple +
    priceOrange +
    pricePear;

let totalCentOffPrice = Math.floor(priceApple) +
    Math.floor(priceOrange) +
    Math.floor(pricePear);

let totalRounded100Amount = roundTo10(totalSum, 2);

let totalAmountEven;

function roundTo10(number, digit) {
    number = Math.ceil(number / (10 ** digit));
    return number * (10 ** digit)
}

if (Math.floor(totalSum) % 2 > 0) {
    totalAmountEven = false
} else {
    totalAmountEven = true
}

let changeSum = roundToDecimal((500 - totalSum), 2);
let averagePrice = (priceApple +
    priceOrange +
    pricePear) / 3;

let averageRoundedPrice = roundToDecimal(averagePrice, 1);

function roundToDecimal(number, digit) {
    if (digit >= 0) {
        return number = parseFloat(number.toFixed(digit))
    }
}

let discount = roundToDecimal(Math.random(), 2);

let totalDiscountedSum = roundToDecimal(totalSum * (1 - discount), 2)

let netProfit = roundToDecimal(totalSum, 2) / 2 -
    roundToDecimal(totalSum * discount, 2);
netProfit = roundToDecimal(netProfit, 2);

document.writeln(
    `Input:<br \/>
        price for apples - ${priceApple};<br \/>
        price for oranges - ${priceOrange};<br \/>
        price for pears - ${pricePear}<br \/>
    <br \/>
    <br \/>
    <br \/>
    The maximum price is ${Math.max(priceApple, priceOrange, pricePear)}. <br \/>
    The minimum price is ${Math.min(priceApple, priceOrange, pricePear)}.<br \/>
    The total amount is ${totalSum}.<br \/>
    The total amount (cents cut off) is ${totalCentOffPrice}.<br \/>
    The total amount rounded to hundreds is ${totalRounded100Amount}.<br \/>
    Is the total rounded amount even? - ${totalAmountEven}.<br \/>
    Is the total rounded amount odd? - ${!totalAmountEven}.<br \/>
    The change from 500$ when paying for all the goods is ${changeSum}.<br \/>
    The average rouded price is ${averageRoundedPrice}.<br \/>
    <br \/>
    <br \/>
    The discount is ${discount*100}%, so the total sum will be ${totalDiscountedSum}<br \/>
    The net profit is ${netProfit}.
    `
)