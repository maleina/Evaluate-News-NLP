import { checkURLFormat } from './js/urlChecker'
import { handleSubmit, handleReset } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

export {
	checkURLFormat,
	handleSubmit,
	handleReset
}

const keyLink = document.querySelector('#key-link');
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');
const resetBtn = document.querySelector('#reset-btn');

form.addEventListener('submit', handleSubmit);
submitBtn.addEventListener('click', handleSubmit);
submitBtn.addEventListener('submit', handleSubmit);
resetBtn.addEventListener('click', handleReset);
keyLink.addEventListener('click', event => {
	event.preventDefault();
	document.querySelector('#key').scrollIntoView({
		behavior: 'smooth'
	});
});