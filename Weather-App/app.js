import {tipList} from "./tip.js";




const apiKey = 'ca4eb9275b56925bc7e3033e5237e56e';
const apiUrl ='https://api.openweathermap.org/data/2.5/weather?&units=metric';

async function getWeather (){
let userInput = document.querySelector('.userInput');
const response = await fetch(`${apiUrl}&q=${userInput.value}&appid=${apiKey}`);

let data = await response.json();
console.log(data);

if(response.status==400 || response.status==404){
    document.querySelector('.errMsg').style.display='block';
    document.querySelector('.weatherInfo').style.display='none';
}
else{
    document.querySelector('.errMsg').style.display='none';
    document.querySelector('.weatherInfo').style.display="block";
    document.querySelector('.temp').innerHTML = data.main.temp + '°C';
    document.querySelector('.main').innerHTML = data.weather[0].main;
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity +'%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
}
userInput.value = '';
let icon = document.querySelector('.weatherIcon')
icon.src = 'https://i.postimg.cc/d1XxvMVg/cloudy.png';



let randomNumber = Number(Math.floor(Math.random() * 10));
document.querySelector('.tiplist').innerHTML = tipList[randomNumber]
}



let btn = document.querySelector('.searchBtn')
btn.addEventListener('click', getWeather);
// getWeather();






