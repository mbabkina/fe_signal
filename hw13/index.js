/* ID generator */
function* createIdGenerator(number = Infinity) {
    for (let i = 1; i < number; i++) {
        yield i
    }
}

const idGenerator = createIdGenerator()

function showId(number = 10) {
    let counter = 0
    let callId = setInterval(function() {
        counter === number ? clearInterval(callId) : (console.log(idGenerator.next().value))
        counter++
    }, 1000)
}
showId()

/*Font size change */
const fontIncrease = document.querySelector('.increase')
const fontDecrease = document.querySelector('.decrease')
const text = document.querySelector('p')

function fontSize(initValue) {
    let value = initValue;

    return (char) => {
        return char === '+' ? ++value : --value;
    }
}

const updateCounter = fontSize(14);
let action

fontIncrease.addEventListener('click', function() {
    action = '+'
    text.style.fontSize = `${updateCounter(action)}px`;

})

fontDecrease.addEventListener('click', function() {
    action = '-'
    text.style.fontSize = `${updateCounter(action)}px`;
})