// default color size and mode

const DEFAULT_COLOR = 'black';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

// buttons, elements and inputs

const gridSelector = document.querySelector('.grid');
const clearBtn = document.querySelector('#clearBtn');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('.sliderValue');
const colorBtn = document.querySelector('#colorBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const colorPicker = document.querySelector('#colorPicker');
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
clearBtn.onclick = () => reloadGrid();
let mouseDown = false;


// functions

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function gridBoard (size) {
    let squares = gridSelector.querySelectorAll('div');
    squares.forEach((div) => div.remove())
    gridSelector.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridSelector.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mouseover', changeColor);
        square.style.backgroundColor = 'whitesmoke';
        gridSelector.appendChild(square);
    }
}

function setCurrentColor (newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
}

function changeSize (input) {
    gridBoard(input);
}

slider.addEventListener('input', function () {
    let val = document.getElementById('slider').value;
    sliderValue.textContent = val;
});


function changeColor (choice) {
    color = choice;
};

function reloadGrid() {
    let currentValue = document.getElementById('slider').value;
    clearGrid();
    changeSize(currentValue);
}

function clearGrid () {
    gridSelector.innerHTML = '';
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor;
    } 
}

function activateButton (newMode) {
    if(setCurrentMode === 'rainbow') {
        rainbowBtn.classList.remove('active');
    } else if(setCurrentMode === 'color') {
        colorBtn.classList.remove('active');
    }

    if(newMode === 'rainbow') {
        rainbowBtn.classList.add('active');
    } else if(newMode === 'color') {
        colorBtn.classList.add('active');
    }
}

window.onload = () => {
    changeSize(DEFAULT_SIZE);
    activateButton(DEFAULT_MODE);
};

gridBoard(DEFAULT_SIZE);