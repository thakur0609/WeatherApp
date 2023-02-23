const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '24476bd181msha61d2eb60b20750p16893ejsn150686d43a70',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
function Partly_Sunny(temp,cloud_pct)
{
	if(temp < 20 && cloud_pct <30){
		document.getElementById("psunny").style.display = "flex";
	}
	else{
		document.getElementById("psunny").style.display = "none";
	}
}

function Sunny(temp,cloud_pct)
{
	if(temp >= 20 && cloud_pct <30){
		document.getElementById("sunny").style.display = "flex";
	}
	else{
		document.getElementById("sunny").style.display = "none";
	}
}
function Partly_Cloudy(cloud_pct)
{
	if(cloud_pct > 20 && cloud_pct<=40)
	{
		document.getElementById("cloud").style.display = "flex";
	}
	else{
		document.getElementById("cloud").style.display = "none";
	}
}
function Mostly_Cloudy(cloud_pct)
{
	if(cloud_pct > 40 && cloud_pct<70)
	{
		document.getElementById("cloud2").style.display = "flex";
	}
	else{
		document.getElementById("cloud2").style.display = "none";
	}
}
function Rainy(cloud_pct,humidity)
{
	if(cloud_pct >= 70 && humidity>=60){
		document.getElementById("rain").style.display = "flex";
	}
	else{
		document.getElementById("rain").style.display = "none";
	}
}

const getWeather = (city)=>{
	cityname.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		// feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		Sunny(response.temp,response.cloud_pct);
		Partly_Sunny(response.temp,response.cloud_pct);
		Partly_Cloudy(response.cloud_pct);
		Mostly_Cloudy(response.cloud_pct);
		Rainy(response.cloud_pct,response.humidity);
	})
	.catch(err => console.error(err));
}
let x = document.getElementById("submit")
let y = document.getElementById("city")
x.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(y.value)
})
getWeather("Delhi")

const getWeather2 = (city2)=>{
	cityname.innerHTML = city2
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		// feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		Sunny(response.temp,response.cloud_pct);
		Partly_Sunny(response.temp,response.cloud_pct);
		Partly_Cloudy(response.cloud_pct);
		Mostly_Cloudy(response.cloud_pct);
		Rainy(response.cloud_pct,response.humidity);
	})
	.catch(err => console.error(err));
}
let a = document.getElementsByClassName("cty")
Array.from(a).forEach((x)=>{
	x.addEventListener("click",(e)=>{
		e.preventDefault()
		getWeather2(x.innerHTML)
	})

})

getWeather2("Delhi")