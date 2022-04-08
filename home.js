console.log('working')

const mealBtn =document.querySelector('#meal');

const array = ["beans again!", "cooking is hard let's buy mcdonalds", "deez nuts"];

let random = Math.floor(Math.random() * array.length);

const mealAlert = () => {
    random = Math.floor(Math.random() * array.length);

    alert(array[random]);
};

mealBtn.addEventListener('click', mealAlert);
