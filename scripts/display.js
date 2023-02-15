const citiesSection = document.querySelector('.cities');
const todaySection = document.querySelector('.today');
const airCondition = document.querySelector('.air-condition');
const infoSection = document.querySelector('.info');
const detailsSection = document.querySelector('.details');
const moreBtn = document.getElementById('more-btn');

const routerWeather = () => {
  infoSection.classList.remove('d-none');
  todaySection.classList.remove('d-none');
  airCondition.classList.remove('d-none');
  detailsSection.classList.add('d-none');
  citiesSection.classList.add('d-none');
};

const routerCities = () => {
  infoSection.classList.add('d-none');
  todaySection.classList.add('d-none');
  airCondition.classList.add('d-none');
  detailsSection.classList.add('d-none');
  citiesSection.classList.remove('d-none');
};

moreBtn.addEventListener('click', () => {
  todaySection.classList.add('d-none');
  airCondition.classList.add('d-none');
  detailsSection.classList.remove('d-none');
});

const displayCurrentChanged = (cur) => {
  let cityName = document.getElementById('city-name');
  let cityTemp = document.getElementById('city-temp');
  let cityTempImg = document.getElementById('city-temp-img');

  let curCity = document.getElementById('cur-city-name');
  let curCityImg = document.getElementById('cur-city-img');
  let curCityTemp = document.getElementById('cur-city-temp');
  let curCityTime = document.getElementById('cur-city-time');

  let realFeel = document.getElementsByClassName('real-feel');
  let wind = document.getElementsByClassName('wind');
  let uvIndex = document.getElementsByClassName('uv');
  let humidity = document.getElementById('humidity');
  let pressure = document.getElementById('pressure');
  let cloud = document.getElementById('cloud');

  cityName.innerHTML = cur.location?.name;
  cityTemp.innerHTML = `${cur.current?.temp_c}&deg;`;
  cityTempImg.src = cur.current?.condition?.icon;

  curCity.innerHTML = `${cur.location?.name}<i class="fa-solid fa-location-arrow ms-2 fs-5"></i>`;
  curCityTime.innerHTML = moment(cur.location?.localtime_epoch).format('HH:mm');
  curCityTemp.innerHTML = `${cur.current?.temp_c}&deg;`;
  curCityImg.src = cur.current?.condition?.icon;

  humidity.innerHTML = `${cur?.current?.humidity}%`;
  pressure.innerHTML = `${cur?.current?.pressure_mb} hPa`;
  cloud.innerHTML = `${cur?.current?.cloud} %`;

  Array.from(realFeel).map((item) => {
    console.log(cur.current?.feelslike_c);
    item.innerHTML = `${cur.current?.feelslike_c}&deg;`;
  });
  Array.from(wind).map((item) => {
    item.innerHTML = `${cur.current?.wind_kph} km/h;`;
  });
  Array.from(uvIndex).map((item) => {
    item.innerHTML = cur.current?.uv;
  });
};

const displayForecastChange = (fc) => {
  let todayChanceRain = document.getElementsByClassName('rain-chance');

  Array.from(todayChanceRain).map((chance) => {
    chance.innerHTML = `${fc?.day?.daily_chance_of_rain}%`;
  });
};

const displayForecast7days = (divfc, fc) => {
  divfc.innerHTML = '';
  fc.map((day) => {
    divfc.innerHTML += `<div
    class="d-flex justify-content-between align-items-center mx-3 px-4"
  >
  <p class="w-25 mb-0">${moment(day.date).format('DD/MM')}</p>
    <img
    src=${day.day.condition.icon}
      alt=""
      width="48"
    />
    <h6 class="text-white w-25 mb-0">${day.day.condition.text}</h6>
  </div>
  <hr />`;
  });
};

const displayTodayForecast = (divtd, today, i) => {
  divtd.innerHTML += `<div>
  <p>${moment.unix(today.hour[i].time_epoch).format('hh:mm A')}</p>
  <div>
    <img
      src=${today.hour[i].condition.icon}
      alt=""
    />
  </div>
  <p id="6am-temp" class="text-white fw-bold fs-5">${Math.floor(
    today.hour[i].temp_c
  )}&deg;</p>
</div>
<div class="vertical-bar"></div>`;
};

const displayAstro = (dt) => {
  let sunrise = document.getElementById('sunrise');
  let sunset = document.getElementById('sunset');

  sunrise.innerHTML = dt?.astro?.sunrise;
  sunset.innerHTML = dt?.astro?.sunset;
};
