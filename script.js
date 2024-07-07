const body = document.body;
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

    console.log(api)

    const response = await api.json()

    console.log(response)

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

    console.log(response.weather[0].description)
  
    // conditions to for different weather discription.

    if(response.weather[0].description === 'clear sky')
        {
            body.style.backgroundImage =  'url(https://images.pexels.com/photos/816169/pexels-photo-816169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }


    else if(response.weather[0].description === 'snow' || response.weather[0].description === 'light snow' )
        {
            body.style.backgroundImage =  'url(https://images.pexels.com/photos/940365/pexels-photo-940365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }

     else if(response.weather[0].description === 'rain' || response.weather[0].description === 'light rain' || response.weather[0].description === 'shower rain' )
        {
            body.style.backgroundImage =  'url(https://images.pexels.com/photos/12602140/pexels-photo-12602140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }
    else if(response.weather[0].description === 'overcast clouds' )
        {
            body.style.backgroundImage =  'url(https://images.pexels.com/photos/1095817/pexels-photo-1095817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }

        else if(response.weather[0].description === 'mist' || response.weather[0].description === 'haze' || response.weather[0].description === 'smoke' )
        {
            body.style.backgroundImage =  'url(https://images.pexels.com/photos/4275884/pexels-photo-4275884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }

    else if(response.weather[0].description === 'thunderstorm'){
        body.style.backgroundImage =  'url(https://images.pexels.com/photos/12372781/pexels-photo-12372781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
    }

    else if(response.weather[0].description === 'few clouds' || response.weather[0].description === 'broken clouds' )
        {

            body.style.backgroundImage =  'url(https://images.pexels.com/photos/164175/pexels-photo-164175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }

        if(response.weather[0].description === 'scattered clouds')
        {
            body.style.backgroundImage =  'url(https://images.pexels.com/photos/12265989/pexels-photo-12265989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }


}


searchButton.addEventListener('click' , () => {
    apifunction();

})

