const board = document.querySelector('#board')
const SQUARES_COUNT = 595

const colors = ['#e74c3c', '#39ff14', '#8e44ad', '#7fffd4', '#3498db', '#e67e22', '#ccff00', '#2ecc71']

for (let i = 0; i < SQUARES_COUNT; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(elem) {
    //elem.style.backgroundColor = 'red'
    // for (let color of colors) {
    //     elem.style.backgroundColor = color
    // }

    const color = getRandomColor()

    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}