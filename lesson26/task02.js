// https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true

// https://jsonplaceholder.typicode.com/posts

// https://jsonplaceholder.typicode.com/users

const latitude = 44.49;
const longitude = 20.27;

async function printWeather(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  const response = await fetch(url);
  const dataObj = await response.json();
  console.log(dataObj);
  return dataObj;
}
const weatherData = await printWeather(latitude, longitude);
console.log(weatherData);

// const weatherDataJson= JSON.stringify(weatherData, null, 2);
// console.log(weatherDataJson);  // JSON.stringify() - преобразует объект в строку JSON, null - не используется для замены значений, 2 - количество пробелов для отступа в формате JSON

// const weatherDataObj = JSON.parse(weatherDataJson);
// console.log(weatherDataObj);  // JSON.parse() - преобразует строку JSON обратно в 

const temperature = weatherData.current_weather.temperature;
console.log(`Temperature: ${temperature}`);

const keyName = "windspeed";
const windSpeed = weatherData.current_weather[keyName];
console.log(`Wind Speed: ${windSpeed} m/s`);

console.log("========Current weather data========");

for(const key in weatherData.current_weather) {
  const value = weatherData.current_weather[key];
  console.log(`${key} >>>>> ${value}`);
}

console.log("=======Важное дополнение для использования []==========");

const person = {
  name: "John",
  age: 30,
  "city": "New York"
}
console.log(person.name); // John
console.log(person["age"]); // 30
console.log(person["city"]); // New York

//console.log(person.city); // undefined
const key = "city";
console.log(person[key]); // New York
console.log(person[key]); // New York

console.log("=======Многократное использование []==========");
const key2 = "current_weather";
const key3 = "temperature";
console.log(weatherData[key2][key3]); // 25.3 (пример значения температуры) 

console.log("===Повторяем использование axios вместо fetch");
import axios from 'axios';
async function returnWeatherAxios(latitude, longitude) {    
    return axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
}
async function mainAxios(latitude, longitude) {
    const weatherDataAxios = await returnWeatherAxios(latitude, longitude);
    console.log(weatherDataAxios.data);  // Object получаем через data
    return weatherDataAxios.data;
}

const weatherDataAxios = await mainAxios(44.49, 20.27);
const temperatureAxios = weatherDataAxios.current_weather.temperature;
console.log(`Current temperature (Axios): ${temperatureAxios}°C`);

