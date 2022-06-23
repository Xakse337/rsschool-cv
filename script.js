let offset = 0;
const sliderLine = document.querySelector('.sliderLine');
const firstButton = document.querySelector('.firstButton');
const secondButton = document.querySelector('.secondButton');
const thirdButton = document.querySelector('.thirdButton');

document.querySelector('.firstButton').addEventListener('click', function () {
    offset = 0 + 'px'
    sliderLine.style.left = offset
    firstButton.style.opacity = 100 + '%'
    secondButton.style.opacity = 50 + '%'
    thirdButton.style.opacity = 50 + '%'
});

document.querySelector('.thirdButton').addEventListener('click', function () {
    offset = -1600 + 'px'
    sliderLine.style.left = offset
    firstButton.style.opacity = 50 + '%'
    secondButton.style.opacity = 50 + '%'
    thirdButton.style.opacity = 100 + '%'
});

document.querySelector('.secondButton').addEventListener('click', function () {
    offset = -800 + 'px'
    sliderLine.style.left = offset
    firstButton.style.opacity = 50 + '%'
    secondButton.style.opacity = 100 + '%'
    thirdButton.style.opacity = 50 + '%'
});