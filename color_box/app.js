
/* JS App */

const addForm = document.forms['app-form'];

addForm.addEventListener('submit', (e) => {

	e.preventDefault();

	const color = document.querySelector('input[type="text"]').value;

	const body = document.querySelector('body');

	body.style.backgroundColor = color;
});


