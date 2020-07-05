function handleSubmit(event) {
    event.preventDefault();


    // check what text was put into the form field
    let formText = document.getElementById('url').value;

    if (Client.checkURL(formText)){
        console.log("::: Form Submitted :::");

        const updateUI = (res) => {
            document.getElementById('results-heading').innerHTML = `Analysis Results:`
            document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
            document.getElementById('text').innerHTML = `Text: <br>${res.text}`
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

        analyzeURL('http://localhost:8081/analysis', {'urlToAn': formText});
    }
}

export { handleSubmit }
