import {
  getCurrentInfo,
  getForecastToday,
  getForecastWeek,
  getAstronomyForecast,
} from './common.js';

const query = document.getElementById('query');
const searchForm = document.getElementById('search-form');

let forecast = document.getElementById('forecast-7');
let today = new Date();

let q = 'Ho Chi Minh';

window.addEventListener('load', () => {
  getCurrentInfo(displayCurrentChanged, q);
  getForecastToday(q, 1);
  getForecastWeek(forecast, q, 7);
});

query.addEventListener('change', (e) => {
  q = e.target.value;
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getCurrentInfo(displayCurrentChanged, q);
  getForecastToday(q, 1);
  getForecastWeek(forecast, q, 7);
  getAstronomyForecast(q, moment(today).format('yyyy-MM-DD'));
  query.value = '';
  query.focus();
});
