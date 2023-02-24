const url = 'https://api.adviceslip.com/advice';


const generateQuote = () => {
    fetch(url)
    .then (r => r.json())
    .then (data => quote(data));
}



const quote = data => {
    const text = data.slip.advice;
    const id = data.slip.id;
    const container = document.getElementById('quote');
    const quoteId = document.getElementById('id');
    container.innerText = text;
    quoteId.innerText = `Quote Id :` + id;

}



