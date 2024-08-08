let emoji = document.querySelector(".container .emoji");
let joke = document.querySelector(".container .joke");
let getJokeBtn = document.querySelector(".container .btns .refresh");
let copyBtn = document.querySelector(".container .btns .copy");
let copyIcon = document.querySelector(".container .btns .copy i");
let copyText = document.querySelector(".container .btns .copy span");
let twittBtn = document.querySelector(".container .btns .twitt");

// Şakaların API

let url ='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single';

getJoke =()=>{
    joke.innerHTML = "Loading...";
    fetch(url).then((res) => res.json()).then((data) =>{
        joke.innerHTML = data.joke;
    })
}

copyJoke = ()=>{
    navigator.clipboard.writeText(joke.textContent);
    copyIcon.style.display = 'none';
    copyText.style.display = 'block';

    setTimeout(()=>{
        copyIcon.style.display = 'block';
        copyText.style.display = 'none';
    }, 500)
}


twittJoke = ()=>{
    let tweeturl = `https://twitter.com/intent/tweet?url=${joke.textContent}`;
    window.open(tweeturl, "_blank");
}


getJoke();
getJokeBtn.addEventListener("click", getJoke);
copyBtn.addEventListener("click", copyJoke);
twittBtn.addEventListener("click", twittJoke);