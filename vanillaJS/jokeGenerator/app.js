let jokes = document.getElementById('jokes');
let btn = document.getElementById('btn');
let api = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

btn.addEventListener('click', ()=>{
    jokes.classList.remove('fade')
    fetch(api)
    .then(res => {return res.json()})
    .then((data)=>{
        const {joke} = data;
        jokes.textContent = joke;
        jokes.classList.add('fade')
    })
})