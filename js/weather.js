const API_KEY = "40c219a2368789e28991dc348209cee5";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.581237994134845&lon=126.88918940047516&appid=40c219a2368789e28991dc348209cee5&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;

        });

}
function onGeoError() {
    alert("Can't find you. No weather for you.");

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
