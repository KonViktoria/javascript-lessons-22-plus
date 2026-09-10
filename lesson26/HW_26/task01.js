// https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/users

import axios from "axios";


// ===== ПОЛЬЗОВАТЕЛИ — FETCH =====

async function returnUser(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const userData = await response.json();
    return userData;
}

const people = [];
for (let i = 1; i <= 10; i++) {

    const userData = await returnUser(i);

    const myObj = {
        id: userData.id,
        name: userData.name,
        phone: userData.phone,
        latitude: userData.address.geo.lat,
        longitude: userData.address.geo.lng
    };

    people.push(myObj);
}


// ===== ПОГОДА — AXIOS =====

async function returnWeather(latitude, longitude) {
    const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    return response.data;
}

// Получаем погоду каждого пользователя

for (const person of people) {
    const weather = await returnWeather(
        person.latitude,
        person.longitude
    );
    person.temperature = weather.current_weather.temperature;
}


// ===== ИЩЕМ САМУЮ ВЫСОКУЮ ТЕМПЕРАТУРУ =====

let hottestUser = people[0];

for (const person of people) {
    if (person.temperature > hottestUser.temperature) {
        hottestUser = person;
    }
}
console.log(
    `Имя: ${hottestUser.name}, телефон: ${hottestUser.phone}, температура: ${hottestUser.temperature}°C`
);