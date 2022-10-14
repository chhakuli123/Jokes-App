let joke = document.getElementById("joke");
let jokeBtn = document.getElementById("jokeBtn");


jokeBtn.addEventListener('click', getJock);

getJock();//we have jock when page lods

async function getJock() {
    //call api of jock

    let jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }//this will tell api that we need json reply

    });

    let storeJoke = await jokeRes.json(); //store the joke

    //set the new jock
    joke.innerHTML = storeJoke.joke

}