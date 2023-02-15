import { getCurrent, getForecast, getAstronomy } from './API.js';

export const getCurrentInfo = async (func, q) => {
  try {
    const res = await getCurrent(q);
    func(res);
  } catch (err) {
    console.log(err);
  }
};

export const getForecastToday = async (divtd, q, days) => {
  try {
    const res = await getForecast(q, days);
    let today = res.forecastday[0];
    displayForecastChange(today);
    displayTodayForecast(divtd, today, 6);
    displayTodayForecast(divtd, today, 9);
    displayTodayForecast(divtd, today, 12);
    displayTodayForecast(divtd, today, 15);
    displayTodayForecast(divtd, today, 18);
    displayTodayForecast(divtd, today, 21);
  } catch (err) {
    console.log(err);
  }
};

export const getForecastWeek = async (forecast, q, days) => {
  try {
    const res = await getForecast(q, days);
    displayForecast7days(forecast, res.forecastday);
  } catch (err) {
    console.log(err);
  }
};

export const getAstronomyForecast = async (q, dt) => {
  try {
    const res = await getAstronomy(q, dt);
    displayAstro(res);
  } catch (err) {}
};
