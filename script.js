const city = document.querySelector('.city');
const searchButton = document.querySelector('.search');
const title = document.querySelector('.title');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const weatherImage = document.querySelector('.weather-image');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const apikey = 'b9752518e3eaf82e07580d8e3f6c383f';


async function apifunction(){

    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}&units=metric&units=imperial`)

    const response = await api.json()

    // console.log(response)

    const getCityWeather = city.value.toUpperCase();


    if(api.status === 404){
        title.innerText = `City not found!`
        temperature.innerText = ``;
        humidity.innerText = ``;
        weatherDescription.innerText = ``;
        wind.innerText = ``;  
        weatherImage.src = ``
        weatherImage.classList.add('notfoundcityimage') 
    }

    else{
    // showing data
    title.innerText = `Weather In ${getCityWeather}`;
    temperature.innerText = `Temperature :  ${response.main.temp}°C`;
    humidity.innerText = `Humidity :  ${response.main.humidity}%`;
    weatherImage.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
    weatherDescription.innerText = `${response.weather[0].description}`
    wind.innerText = `Wind :  ${response.wind.speed} miles/h`

    // city.value = '';
    title.classList.add('title-margin');
    }
    

}


searchButton.addEventListener('click' , () => {
    apifunction();

})

