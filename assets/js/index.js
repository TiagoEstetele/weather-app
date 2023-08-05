//API
const apiKey = "2ca464b00339fa4c0e7a73e2df4706e6";
var cityInput = $j('.h-weather__search form input');
city = "São Paulo"


const getWeatherData = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    const name = $$j('.h-weather__infos > p');
    const temperature = $j('.h-weather__infos > h1 span');
    const umidity = $j('.h-weather__moisture > p span')
    const windSpeed = $j('.h-weather__wind > p span');
    


    name[0].innerText = data.name;
    name[1].innerText = data.weather[0]['description'].charAt(0).toUpperCase() + data.weather[0]['description'].substring(1);
    temperature.innerText = parseInt(data.main['temp']);
    umidity.innerText = `${data.main['humidity']}%`;
    windSpeed.innerText = data.wind['speed'];


    console.log(data);  

}


$j('.h-weather__search button').addEventListener('click', (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
})
    