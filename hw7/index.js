const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 }
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 }
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 }

/* Function 1 - Tax amount */
const getTaxAmount = (country, salary) => +(country.tax * +salary).toFixed(2)

console.log(getTaxAmount(ukraine, 1000))

/* Funtion 2 - Average tax amount*/
function getMiddleTaxes(country) {
    return +(this.tax * this.middleSalary).toFixed(2)
}

console.log(getMiddleTaxes.call(latvia))

/* Funtion 3 - Total tax amount*/
function getTotalTaxes(country) {
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2)
}

console.log(getTotalTaxes.call(litva))

/* Function 4 - Random salary */
function getMySalary(country) {
    let callCounter = 0

    let callMySalary = setInterval(function() {

        callCounter === 10 ? clearInterval(callMySalary) : (function() {
            let salary = +((1500 + Math.random() * 2000) * country.tax).toFixed(2)
            let taxes = +(salary * country.tax).toFixed(2)
            let profit = +(salary - taxes).toFixed(2)

            let result = {
                salary,
                taxes,
                profit,
            }
            console.log(result)
        })()
        callCounter++
    }, 10000)
}

getMySalary(ukraine)