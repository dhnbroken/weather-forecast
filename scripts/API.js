const axiosInstance = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  timeout: 5000,
});

export const getCurrent = async (q) => {
  try {
    const res = await axiosInstance.get(
      `/current.json?key=948f3f6d8cd345deb2331510230802&q=${q}&aqi=yes`
    );
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};

export const getForecast = async (q, days) => {
  try {
    const res = await axiosInstance.get(
      `forecast.json?key=948f3f6d8cd345deb2331510230802&q=${q}&days=${days}&aqi=yes&alerts=no`
    );
    return res.data.forecast;
  } catch (err) {
    throw Error(String(err));
  }
};

export const getAstronomy = async (q, dt) => {
  try {
    const res = await axiosInstance.get(
      `astronomy.json?key=948f3f6d8cd345deb2331510230802&q=${q}&dt=${dt}`
    );
    return res.data.astronomy;
  } catch (err) {
    throw Error(String(err));
  }
};
