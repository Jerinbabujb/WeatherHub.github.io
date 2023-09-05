const apiKey="ebb4f74e9e7f87f35e4778528315f990";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".mar input");
const searchBtn= document.querySelector(".mar button");
const weatherImage=document.querySelector(".weatherimage");
async function checkWeather(city)
{
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".degree").innerHTML=Math.round(data.main.temp)+"℃";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"% humidity";
    document.querySelector(".windspeed").innerHTML=data.wind.speed+"km/hr wind speed";
    if(data.weather[0].main=="Clouds")
    {
        weatherImage.src="./images/clouds.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherImage.src="./images/rain.png";

    }
    else if(data.weather[0].main=="Snow")
    {
        weatherImage.src="./images/snow.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherImage.src="./images/drizzle.png";
    }
    else if(data.weather[0].main=="clear")
    {
        weatherImage.src="./images/clear.png";
    }

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
