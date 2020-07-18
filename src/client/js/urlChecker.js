// Function to validate the user submitted news story URL
function checkURL(inputText) {
    let urlEl = document.getElementById('url');
    if (!validateURL(inputText)) {
        //alert('Please enter a valid URL in the form of "http://example.com" or "https://example.com".');
        urlEl.setCustomValidity('Please enter a valid URL in the form of "http://example.com" or "https://example.com".');
        urlEl.reportValidity();
    } else {
        urlEl.setCustomValidity('');
        urlEl.reportValidity();
        return true
    }

// This function is from https://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url (user1524615)
function validateURL(textval) {
            let urlregex = new RegExp(
            "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|localhost|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
            return urlregex.test(textval);
        }
}
export { checkURL }
