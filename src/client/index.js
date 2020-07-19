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

// Scroll to appropriate anchor ID
function scrollToSection() {
	keyLink.addEventListener('click', event => {
		event.preventDefault();
		document.querySelector('#key').scrollIntoView({
            behavior: 'smooth'
        });
	});
}

scrollToSection();