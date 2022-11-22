
export interface WeatherQuery {
  location: string;
}

interface Weather {
  id: number;
  main: string;
  description: string;
}

interface Main {
  temp: number;
  feelsLike: number;
}

interface CurrentWeather {
  weather: Weather[]
  main: Main;
  name: string;
}

export interface WeatherIndex {
  query: WeatherQuery;
  currentWeather: CurrentWeather;     
}
