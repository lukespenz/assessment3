console.log('working')

const mealBtn =document.querySelector('#meal');

const array = ["beans again!", "screw it let's buy McDonalds", "deez nuts"];

const random = Math.floor(Math.random() * array.length);


const mealAlert = () => {
    alert(array[random])
};

mealBtn.addEventListener('click', mealAlert)