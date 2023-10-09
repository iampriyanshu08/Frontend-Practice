const jokeContainer = document.getElementById("joke");
const genButton = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getJokes = () => {
   

  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
     
      
    });
};

genButton.addEventListener("click", getJokes);

