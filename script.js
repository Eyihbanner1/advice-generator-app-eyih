const apiUrl = 'https://api.adviceslip.com/advice';
const adviceId = document.querySelector('#advice-id');
const adviceText = document.querySelector('#advice-text');
const randomBtn = document.querySelector('#random-btn');

async function getAdvice(){
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log('clicked');

    adviceId.innerHTML = `Advice #${data.slip.id}`;
    adviceText.innerHTML = data.slip.advice;
}

randomBtn.addEventListener('click', getAdvice);

getAdvice();
