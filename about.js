console.log("hello world");

const ninjaDuckPhoto = document.querySelector('#ninjaDuckPhoto')

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Congrats! Your form has been successfully submitted 🥳. I am proud of you.");
}

ninjaDuckPhoto.addEventListener('mouseover', () => {
	alert('Has anyone ever told you have such giving energy?')
});

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);