const getSquares = document.querySelector('.squares-generate')
const getColor = document.querySelector('.squares-color')
const container = document.querySelector('.squares-container')

function generateBlocks() {
    let fragment = new DocumentFragment()

    for (let i = 1; i <= 25; i++) {
        let block = document.createElement('span')
        block.className = 'square'
        fragment.append(block)
    }

    return fragment
}

function makeVisible() {
    getColor.removeAttribute('hidden')
}

function randomColor() {
    let color = Array.from({ length: 6 },
        el => (9 * Math.random()).toFixed()).join('')
    return `#${color}`
}

function addColors() {
    setInterval(function() {
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].style.background = randomColor()
        }
    }, 1000)
}

getSquares.addEventListener('click', makeVisible)
getSquares.addEventListener('click', function() { container.append(generateBlocks()) })

getColor.addEventListener('click', addColors)