import React, {useState} from 'react'
import axios from 'axios'

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  // Điền API key của openweather.org ở đây
  const APIKey = 'YOUR_API_KEY_HERE';

  // Promise: 1 giá trị trong hoạt động bất đồng bộ
  // Hoạt động bất đồng bộ: 1 chương trình hoạt động nhiều tác vụ cùng 1 lúc
  const getWeather = () => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`)
    .then((response) => {setWeather(response.data); setError('')})
    .catch((error) => {setWeather(''); setError("The city or country is not found!")})
  }

  const chooseImages = (main) => {
    switch(main){
      case 'Clouds':
        return(
          <img src="images/clouds.png" alt='icon' width={150}/>
        );
      case 'Clear':
        return(
          <img src="images/clear.png" alt='icon' width={150}/>
        );
      case 'Drizzle':
        return(
          <img src="images/drizzle.png" alt='icon' width={150}/>
        );
      case 'Mist':
        return(
          <img src="images/clear.png" alt='icon' width={150}/>
        );
      case 'Rain':
        return(
          <img src="images/rain.png" alt='icon' width={150}/>
        );
      case 'Snow':
        return(
          <img src="images/snow.png" alt='icon' width={150}/>
        );
      default:
        return(
          <img src="" alt='icon' width={150}/>
        );
    }
  }
  return (
    <div>
        <div className='my-3 d-flex gap-3'>
          <input type='text' value={city} className='form-control' placeholder='Enter your city...' onChange={(ev) => setCity(ev.target.value)}/>
          <button className='btn btn-danger' style={{maxHeight: "60px", maxWidth: "60px"}} onClick={getWeather} ><img src='images\magnifying-glass-solid.svg' alt='search' height='80%' width="80%"/></button>
        </div>
        <a href='https://github.com/KimTam05' className='btn btn-primary'>My GitHub</a>
        
        {weather && (
          <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4 text-center border border-3 rounded border-success bg-success py-4'>
              {/* Chuyển độ °F sang °C */}
              {chooseImages(weather.list[0].weather[0].main)}
              <h1 className='text-white'>{Math.round(weather.list[0].main.temp - 273.15)}°C</h1>
              <h4 className='text-white'>{weather.city.name}</h4>
              <div className='row mt-5'>
                <div className='col-sm-2'></div>
                <div className='col-sm-4'>
                  <div className='d-flex align-items-center justify-content-center gap-3'>
                    <img src='images/humidity.png' alt='icon' width='30%' height='30%'/>
                    <h4 className='text-white'>{weather.list[0].main.humidity}%</h4>
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div className='d-flex justify-content-center align-item-center gap-2 p-0'>
                    <img src='images/wind.png' alt='icon' width='30%' height='30%' className=''/>
                    <h4 className='text-white'>{weather.list[0].wind.speed}km/h</h4>
                  </div>
                </div>
                <div className='col-sm-2'></div>
              </div>
              <div className='row'>
                <div className='col-sm-2'></div>
                <div className='col-sm-4'><p className='text-white'>Humidity</p></div>
                <div className='col-sm-4'><p className='text-white'>Wind</p></div>
                <div className='col-sm-2'></div>
              </div>
            </div>
            <div className='col-sm-4'></div>
          </div>
        )}

        {
          error && (
            <div className='row'>
              <div className='col-sm-4'></div>
              <div className='col-sm-4 alert alert-danger'>
                { error }
              </div>
              <div className='col-sm-4'></div>
            </div>
          )}
    </div>
  )
}
