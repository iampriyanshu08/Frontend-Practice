const jokeContainer = document.getElementById("joke");
const genButton = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getJokes = () => {
    jokeContainer.classList.remove("fade");

  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
      
    });
};

genButton.addEventListener("click", getJokes);
getJokes();
