console.log('working');

const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');

const colorAlert = () => {
    alert("It changes with the season but currently I'm really vibing with beige")
};

const placeAlert = () => {
    alert("Wherever you are that's where I want to be baby")
};

const ritualAlert = () => {
    alert("Prayer. It's easy to forget to cultivate a relationship with the Unknowable, but death takes us all, so let's remember to love each other while we still can.")
}

colorBtn.addEventListener('click', colorAlert);
placeBtn.addEventListener('click', placeAlert);
ritualBtn.addEventListener('click', ritualAlert);


