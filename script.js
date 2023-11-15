const apiKey = 'd3c39f57206d5904890771c822ffaac3';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchButton = document.querySelector('.search button');
searchButton.addEventListener('click', search);

function search(){
    const searchInput = document.querySelector('.search input');
    var ciudad = searchInput.value;
    fetch(apiUrl+ciudad+'&appid='+apiKey)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            if(json.cod == '200'){
                document.getElementsByClassName('weather')[0].style.display = 'block';
                document.getElementsByClassName('error')[0].style.display = 'none';

                document.getElementsByClassName('weather-icon')[0].src = 'images/' + json.weather[0].main.toLowerCase() + '.png';
                document.getElementsByClassName('temp')[0].textContent = Math.round(json.main.temp) + '°C';
                document.getElementsByClassName('humidity')[0].textContent = json.main.humidity + '%';
                document.getElementsByClassName('wind')[0].textContent = json.wind.speed + ' km/h';
                document.getElementsByClassName('city')[0].textContent = json.name;
            } else {
                document.getElementsByClassName('error')[0].style.display = 'block';
                document.getElementsByClassName('weather')[0].style.display = 'none';
            }
        })
        .catch(err => {
            console.log('Error', err);
        })
}//Completado

