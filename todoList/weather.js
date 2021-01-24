const weather = document.querySelector(".js-weather");

const API_KEY = '26334f288fc9aecf9f0ba65c81ac5ead';
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        //console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `<p>현재 기온: ${temperature}°C</p>
        <p>현재 위치: ${place}</p>`;
    });
    //fetch를 기다리지 않고 다음작업을 지시하면 fetch가 정상적으로 작동 x 할수있음
}

function saveCoords(coordsObj){
    // localStorage 에 저장할때는 string 타입으로 바꿔서 저장해준다.
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, //latitude: latitude,
        longitude //longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('Cant access geo location');
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError); //requirements (값을 받을 때 실행시킬 함수, 값을 받지 못할 때 실행시킬 함수)
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        // getWeather
        // localStorage 에서 불러올 때, 다시 string 타입에서 object로 바꾸어줌
        const parseCoords = JSON.parse(loadedCoords); 
        //console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
function init(){
    loadCoords();
}

init();