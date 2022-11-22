import { stringify } from "qs";
import { API_URL } from "../constants";
import { WeatherQuery, WeatherIndex } from "./definitions/Weather";
import { WEATHER_INDEX } from "./routes";

export default class Weather {
  static async index(q: WeatherQuery): Promise<WeatherIndex> {
    const response = await fetch(API_URL + WEATHER_INDEX + '?' + stringify(q), {
      headers: {
       'Accept': 'application/json'
      },
      method: 'GET'
    });
    return await response.json();
  }
}
