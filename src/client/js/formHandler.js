// Helper functions to manipulate page elements
function addInactiveClass(elementId) {
    document.getElementById(elementId).classList.add('inactive');
}

function removeInactiveClass(elementId) {
    document.getElementById(elementId).classList.remove('inactive');
}

function setInnerHtml (elementId, value) {
    document.getElementById(elementId).innerHTML = value;
}

//Event Handlers
function handleSubmit(event) {
    event.preventDefault();

    let formText = document.getElementById('url').value;

    if (Client.checkURLFormat()){
        removeInactiveClass('waiting-box');

        const updateUI = (res) => {
            addInactiveClass('waiting-box');
            removeInactiveClass('key');
            removeInactiveClass('results-box');
            addInactiveClass('submit-btn');
            setInnerHtml('polarity', `<em>Polarity:</em> ${res.polarity}`);
            setInnerHtml('subjectivity', `<em>Subjectivity:</em> ${res.subjectivity}`);
            setInnerHtml('text', `<em>Text:</em> <br>${res.text}`);
        }

        const analyzeURL = (url = '', data = {}) => {
            fetch(url, {
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
    addInactiveClass('waiting-box');
    addInactiveClass('results-box');
    addInactiveClass('key');
    document.getElementById('url').value = '';
    setInnerHtml('polarity', '');
    setInnerHtml('subjectivity', '');
    setInnerHtml('text', '');
    removeInactiveClass('submit-btn');
}

export { handleSubmit, handleReset }
