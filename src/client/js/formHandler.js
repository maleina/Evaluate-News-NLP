function handleSubmit(event) {
    event.preventDefault();


    // check what text was put into the form field
    let formText = document.getElementById('url').value;

    if (Client.checkURL(formText)){
        console.log("::: Form Submitted :::");
        document.getElementById('waiting-box').style.display = "block";

        const updateUI = (res) => {
            document.getElementById('waiting-box').style.display = "none";
            document.getElementById('results-box').style.display = "block";
            document.getElementById('polarity').innerHTML = `<em>Polarity:</em> ${res.polarity}`
            document.getElementById('subjectivity').innerHTML = `<em>Subjectivity:</em> ${res.subjectivity}`
            document.getElementById('text').innerHTML = `<em>Text:</em> <br><br>${res.text}`
            document.getElementById('submit-btn').style.display = "none";
            document.getElementById('reset-btn').style.display = "block";
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
    document.getElementById('results-box').style.display = "none";
    document.getElementById('url').value = '';
    document.getElementById('polarity').innerHTML = '';
    document.getElementById('subjectivity').innerHTML = '';
    document.getElementById('text').innerHTML = '';
    document.getElementById('submit-btn').style.display = "block";
    document.getElementById('reset-btn').style.display = "none";
}

export { handleSubmit, handleReset }
