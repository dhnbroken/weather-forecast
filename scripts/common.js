import { getCurrent, getForecast, getAstronomy } from './API.js';

export const getCurrentInfo = async (func, q) => {
  try {
    const res = await getCurrent(q);
    func(res);
  } catch (err) {
    console.log(err);
  }
};

export const getForecastToday = async (q, days) => {
  try {
    const res = await getForecast(q, days);
    let today = res.forecastday[0];
    displayForecastChange(today);
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
