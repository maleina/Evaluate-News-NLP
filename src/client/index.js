import { checkURL } from './js/urlChecker'
import { handleSubmit, handleReset } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

export {
	checkURL,
	handleSubmit,
	handleReset
}

console.log(checkURL);

console.log("Loading Page");

const key = document.querySelector('#key-link');

// Scroll to appropriate anchor ID
function scrollToSection() {
	key.addEventListener('click', event => {
		event.preventDefault();
		document.querySelector(event.target.hash).scrollIntoView({
            behavior: 'smooth'
        });
	});
}

scrollToSection();