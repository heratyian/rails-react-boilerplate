import { WeatherIndex } from "../../api/v1/definitions/Weather";

export default interface WeatherState {
  weathers: WeatherIndex[];
  counter: number;
}
