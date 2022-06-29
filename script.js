const apiUrl = 'https://api.adviceslip.com/advice';
const adviceId = document.querySelector('#advice-id');
const adviceText = document.querySelector('#advice-text');
const randomBtn = document.querySelector('#random-btn');

async function getAdvice(){
    // fetch advice from api
    const response = await fetch(apiUrl);

    // convert response to json
    const data = await response.json();

    // use data to update UI or manipulate DOM
    adviceId.innerHTML = `Advice #${data.slip.id}`;
    adviceText.innerHTML = data.slip.advice;
}


// add event listener to random button
randomBtn.addEventListener('click', getAdvice);

// call getAdvice function on load
getAdvice();
