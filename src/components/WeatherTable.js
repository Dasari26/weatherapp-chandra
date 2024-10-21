const WeatherTable = ({ data }) => {
  const weatherForDays = data.list.filter((item, index) => index % 8 === 0);

  return (
    <div className="weather-table">
      {weatherForDays.map((day, index) => (
        <div key={index} className="day-card">
          <table className="weather-details">
            <thead>
                <tr>
                    <th colSpan="2">  <h3>Date: {new Date(day.dt_txt).toLocaleDateString()}</h3></th>
                </tr>
              <tr>
                <th colSpan="2">Temperature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Min</td>
                <td>Max</td>
              </tr>
              <tr>
                <td>{day.main.temp_min} °C</td>
                <td>{day.main.temp_max} °C</td>
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{day.main.pressure} hPa</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{day.main.humidity} %</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default WeatherTable;
