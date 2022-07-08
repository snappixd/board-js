const board = document.querySelector('#board')
const SQUARES_COUNT = 595

const square_1 = document.querySelector('.square-1')
const square_2 = document.querySelector('.square-2')
const square_3 = document.querySelector('.square-3')
const square_4 = document.querySelector('.square-4')
const square_5 = document.querySelector('.square-5')
const square_6 = document.querySelector('.square-6')
const square_7 = document.querySelector('.square-7')

let currentColor = 'red';
let mouseDown = false;

document.body.onmousedown = function() {
    mouseDown = true;
}

document.body.onmouseup = function() {
    mouseDown = false;;
}

const colors = ['#e74c3c', '#39ff14', '#8e44ad', '#7fffd4', '#3498db']

square_1.addEventListener('mousedown', () => {
    changeCurrColor('#e74c3c')
})
square_2.addEventListener('mousedown', () => { changeCurrColor('#39ff14') })
square_3.addEventListener('mousedown', () => { changeCurrColor('#8e44ad') })
square_4.addEventListener('mousedown', () => { changeCurrColor('#7fffd4') })
square_5.addEventListener('mousedown', () => { changeCurrColor('#3498db') })
square_6.addEventListener('mousedown', () => { changeCurrColor('#dbc81f') })
square_7.addEventListener('mousedown', () => { changeCurrColor('#1d1d1d') })

function changeCurrColor(color) {
    currentColor = color
    console.log("Current color: " + currentColor);
}

for (let i = 0; i < SQUARES_COUNT; i++) {
    const square = document.createElement('div')
    square.classList.add('square')


    square.addEventListener('mouseover', () => {
        if (mouseDown) {
            setColor(square)
            console.log(mouseDown);
        }

    })

    square.addEventListener('mouseleave', () => {
        if (mouseDown) {
            setColor(square)
            console.log(mouseDown);
        }
    })

    board.append(square)
}

function setColor(elem) {
    //elem.style.backgroundColor = 'red'
    // for (let color of colors) {
    //     elem.style.backgroundColor = color
    // }

    let color = currentColor

    elem.style.backgroundColor = color
    if (color === '#1d1d1d') {
        elem.style.boxShadow = '0 0 0px #000'
    } else {
        elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

}

// function removeColor(elem) {
//     elem.style.backgroundColor = '#1d1d1d'
//     elem.style.boxShadow = '0 0 2px #000'
// }

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}