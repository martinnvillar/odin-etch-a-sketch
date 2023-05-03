// buttons, input and grid

const gridSelector = document.querySelector('.grid');
const colorPicker = document.querySelector('.colorPicker');
let sliderValue = document.querySelector('.sliderValue');
const blackBtn = document.querySelector('#blackBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const clearBtn = document.querySelector('#clearBtn');
const slider = document.querySelector('#slider');

let pixel = '';
let gridSize = 16;

function createGrid (screenSize) {
    for (let i = 0; i < screenSize ** 2; i++) { 
        pixel = document.createElement('div');
        pixel.style.border = '1px solid black';
        pixel.classList.add('pixel');
        pixel.style.backgroundColor = 'white';
        gridSelector.appendChild(pixel);
    };

    gridSelector.style.gridTemplateColumns = `repeat(${screenSize}, auto)`;
    gridSelector.style.gridTemplateRows = `repeat(${screenSize}, auto)`;
};

createGrid(gridSize);

slider.addEventListener('input', function () {
    let val = document.getElementById('slider').value;
    sliderValue.textContent = val;
});
