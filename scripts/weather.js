import {
  getCurrentInfo,
  getForecastToday,
  getForecastWeek,
  getAstronomyForecast,
} from './common.js';

const query = document.getElementById('query');
const searchForm = document.getElementById('search-form');
let todayDetails = document.getElementById('today-details');

let forecast = document.getElementById('forecast-7');
let today = new Date();

let q = 'Ho Chi Minh';

window.addEventListener('load', () => {
  getCurrentInfo(displayCurrentChanged, q);
  getForecastToday(todayDetails, q, 1);
  getForecastWeek(forecast, q, 7);
});

query.addEventListener('change', (e) => {
  q = e.target.value;
});

searchForm.addEventListener('submit', (e) => {
  todayDetails.innerHTML = '';
  e.preventDefault();
  getCurrentInfo(displayCurrentChanged, q);
  getForecastToday(q, 1);
  getForecastWeek(forecast, q, 7);
  getAstronomyForecast(q, moment(today).format('yyyy-MM-DD'));
  getForecastToday(todayDetails, q, 1);
  query.value = '';
  query.focus();
});
