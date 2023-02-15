const citiesSection = document.querySelector('.cities');
const todaySection = document.querySelector('.today');
const airCondition = document.querySelector('.air-condition');
const infoSection = document.querySelector('.info');
const detailsSection = document.querySelector('.details');
const moreBtn = document.getElementById('more-btn');

const router = (name) => {
  let cities = document.querySelector('.cities-btn');
  let weather = document.querySelector('.weather-btn');
  if (name === 'weather') {
    infoSection.classList.remove('d-none');
    todaySection.classList.remove('d-none');
    airCondition.classList.remove('d-none');
    detailsSection.classList.add('d-none');
    citiesSection.classList.add('d-none');

    weather.classList.add('text-white');
    cities.classList.remove('text-white');
  } else if (name === 'cities') {
    infoSection.classList.add('d-none');
    todaySection.classList.add('d-none');
    airCondition.classList.add('d-none');
    detailsSection.classList.add('d-none');
    citiesSection.classList.remove('d-none');

    cities.classList.add('text-white');
    weather.classList.remove('text-white');
  }
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
    item.innerHTML = `${cur.current?.feelslike_c}&deg;`;
  });
  Array.from(wind).map((item) => {
    item.innerHTML = `${cur.current?.wind_kph} km/h;`;
  });
  Array.from(uvIndex).map((item) => {
    item.innerHTML = cur.current?.uv;
  });
};

const displayBtn = (div) => {
  div.innerHTML += `<button onclick="router('weather')" class="btn text-secondary text-white border-0 weather-btn">
  <div class="text-center cursor-pointer">
    <i class="fa-solid fa-cloud"></i>
    <p>Weather</p>
  </div>
</button>
<button onclick="router('cities')" class="btn text-secondary border-0 cities-btn">
  <div class="text-center cursor-pointer">
    <i class="fa-solid fa-city"></i>
    <p>Cities</p>
  </div>
</button>`;
};

const displayInfo = (cur) => {
  infoSection.innerHTML = `<div
  class="d-flex justify-content-between align-items-center h-100 flex-column-reverse text-center text-md-start flex-md-row"
>
  <div
    class="d-flex flex-column justify-content-between h-50 gap-3 p-3"
  >
    <div>
      <h3 id="city-name" class="text-white">${cur.location?.name}</h3>
      Change of rain: <span class="rain-chance">0%</span>
    </div>
    <h3 id="city-temp" class="text-white fs-1">${cur.current?.temp_c}&deg;</h3>
  </div>
  <div>
    <img
      src=${cur.current?.condition?.icon}
      alt=""
      class="pt-4"
      id="city-temp-img"
      width="140"
    />
  </div>
</div>`;
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

const displayCities = (city) => {
  citiesSection.innerHTML += `<div class="card-custom h-23">
  <div
    class="p-3 px-4 d-flex align-items-center justify-content-between"
  >
    <div class="w-16">
      <img
        src=${city.current?.condition?.icon}
        alt=""
        width="90"
      />
    </div>
    <div class="w-75">
      <h4 class="text-white">
        ${city.location?.name}
      </h4>
      <p>${moment(city.location?.localtime).format('HH:mm')}</p>
    </div>
    <h3 class="text-white w-7">${city.current?.temp_c}&deg;</h3>
  </div>
</div>`;
};
