import { getCurrentInfo } from './common.js';

window.onload = () => {
  getCurrentInfo(displayCities, 'London');
  getCurrentInfo(displayCities, 'New york');
  getCurrentInfo(displayCities, 'Tokyo');
};
