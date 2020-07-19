// Helper functions to manipulate page elements
function setDisplayValue (element, value) {
    document.getElementById(element).style.display = value;
}

function setInnerHtml (element, value) {
    document.getElementById(element).innerHTML = value;
}

//Event Handlers
function handleSubmit(event) {
    event.preventDefault();

    let formText = document.getElementById('url').value;

    if (Client.checkURLFormat()){
        setDisplayValue('waiting-box', "block");

        const updateUI = (res) => {
            setDisplayValue('waiting-box', "none");
            setDisplayValue('key', "block");
            setDisplayValue('results-box', "block");
            setDisplayValue('submit-btn', "none");
            setDisplayValue('reset-btn', "block");
            setInnerHtml('polarity', `<em>Polarity:</em> ${res.polarity}`);
            setInnerHtml('subjectivity', `<em>Subjectivity:</em> ${res.subjectivity}`);
            setInnerHtml('text', `<em>Text:</em> <br>${res.text}`);
            

        }

        const analyzeURL = async (url = '', data = {}) => {
            const response = await fetch(url, {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(updateUI)
                .catch(err => console.log(err))
            }

        analyzeURL('/analysis', {'urlToAn': formText});
    }
}

function handleReset(event) {
    event.preventDefault();
    setDisplayValue('results-box', "none");
    setDisplayValue('key', "none");
    document.getElementById('url').value = '';
    setInnerHtml('polarity', '');
    setInnerHtml('subjectivity', '');
    setInnerHtml('text', '');
    setDisplayValue('submit-btn', "block");
    setDisplayValue('reset-btn', "none");

}

export { handleSubmit, handleReset }
