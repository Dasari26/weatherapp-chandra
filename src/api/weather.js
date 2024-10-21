import axios from 'axios';

const API_KEY = '1635890035cbba097fd5c26c8ea672a1';

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    return null;
  }
};

