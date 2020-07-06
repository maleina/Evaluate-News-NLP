function handleSubmit(event) {
    event.preventDefault();


    // check what text was put into the form field
    let formText = document.getElementById('url').value;

    if (Client.checkURL(formText)){
        console.log("::: Form Submitted :::");

        const updateUI = (res) => {
            document.getElementById('results-box').style.display = "block";
            document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
            document.getElementById('text').innerHTML = `Text: <br><br>${res.text}`
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

        analyzeURL('http://localhost:8000/analysis', {'urlToAn': formText});
    }
}

export { handleSubmit }
