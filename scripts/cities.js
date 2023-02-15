import { getCurrentInfo } from './common.js';

const displayCity1 = (cur) => {
  let city1 = document.getElementById('city1-name');
  let city1Img = document.getElementById('city1-img');
  let city1Temp = document.getElementById('city1-temp');
  let city1Time = document.getElementById('city1-time');

  city1.innerHTML = cur.location?.name;
  city1Time.innerHTML = moment(cur.location?.localtime_epoch).format('HH:mm');
  city1Temp.innerHTML = `${cur.current?.temp_c}&deg;`;
  city1Img.src = cur.current?.condition?.icon;
};

const displayCity2 = (cur) => {
  let city2 = document.getElementById('city2-name');
  let city2Img = document.getElementById('city2-img');
  let city2Temp = document.getElementById('city2-temp');
  let city2Time = document.getElementById('city2-time');

  city2.innerHTML = cur.location?.name;
  city2Time.innerHTML = moment(cur.location?.localtime_epoch).format('HH:mm');
  city2Temp.innerHTML = `${cur.current?.temp_c}&deg;`;
  city2Img.src = cur.current?.condition?.icon;
};

const displayCity3 = (cur) => {
  let city3 = document.getElementById('city3-name');
  let city3Img = document.getElementById('city3-img');
  let city3Temp = document.getElementById('city3-temp');
  let city3Time = document.getElementById('city3-time');

  city3.innerHTML = cur.location?.name;
  city3Time.innerHTML = moment(cur.location?.localtime_epoch).format('HH:mm');
  city3Temp.innerHTML = `${cur.current?.temp_c}&deg;`;
  city3Img.src = cur.current?.condition?.icon;
};

window.onload = () => {
  getCurrentInfo(displayCity1, 'London');
  getCurrentInfo(displayCity2, 'New york');
  getCurrentInfo(displayCity3, 'Tokyo');
};
