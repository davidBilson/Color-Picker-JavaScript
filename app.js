const colors = ['green', 'orangered', 'rgb(133,122,200)', '#f15025'];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    //random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    let bodyColor = document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = bodyColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

