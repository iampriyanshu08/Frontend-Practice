const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

async function newQuote(){
    let response = await fetch('https://api.quotable.io/random')
    let data = await response.json();
    console.log(data);

    quote.innerHTML = data.content;
    author.innerHTML = '--' +  data.author;
}
newQuote()

function tweet(){
    window.open('https://twitter.com/tweet?text=' + quote.innerHTML + ' ' + author.innerHTML , '_blank', 'width=500','height=350')
} 