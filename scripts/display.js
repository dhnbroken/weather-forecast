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

  let am6Img = document.getElementById('6am-img');
  let am6Temp = document.getElementById('6am-temp');

  let am9Img = document.getElementById('9am-img');
  let am9Temp = document.getElementById('9am-temp');

  let pm12Img = document.getElementById('12pm-img');
  let pm12Temp = document.getElementById('12pm-temp');

  let pm3Img = document.getElementById('3pm-img');
  let pm3Temp = document.getElementById('3pm-temp');

  let pm6Img = document.getElementById('6pm-img');
  let pm6Temp = document.getElementById('6pm-temp');

  let pm9Img = document.getElementById('9pm-img');
  let pm9Temp = document.getElementById('9pm-temp');

  Array.from(todayChanceRain).map((chance) => {
    chance.innerHTML = `${fc?.day?.daily_chance_of_rain}%`;
  });

  am6Img.src = fc?.hour[6].condition.icon;
  am6Temp.innerHTML = `${Math.floor(fc?.hour[6]?.temp_c)}&deg;`;

  am9Img.src = fc?.hour[9].condition.icon;
  am9Temp.innerHTML = `${Math.floor(fc?.hour[9]?.temp_c)}&deg;`;

  pm12Img.src = fc?.hour[12].condition.icon;
  pm12Temp.innerHTML = `${Math.floor(fc?.hour[12]?.temp_c)}&deg;`;

  pm3Img.src = fc?.hour[15].condition.icon;
  pm3Temp.innerHTML = `${Math.floor(fc?.hour[15]?.temp_c)}&deg;`;

  pm6Img.src = fc?.hour[18].condition.icon;
  pm6Temp.innerHTML = `${Math.floor(fc?.hour[18]?.temp_c)}&deg;`;

  pm9Img.src = fc?.hour[21].condition.icon;
  pm9Temp.innerHTML = `${Math.floor(fc?.hour[21]?.temp_c)}&deg;`;
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

const displayAstro = (dt) => {
  let sunrise = document.getElementById('sunrise');
  let sunset = document.getElementById('sunset');

  sunrise.innerHTML = dt?.astro?.sunrise;
  sunset.innerHTML = dt?.astro?.sunset;
};
