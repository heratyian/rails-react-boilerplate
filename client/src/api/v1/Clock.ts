import { API_URL } from "../constants";
import { ClockIndex } from "./definitions/Clock";
import { CLOCK_INDEX } from "./routes";

export default class Clock {
  static async index(): Promise<ClockIndex> {
    const response = await fetch(API_URL + CLOCK_INDEX, {
      headers: {
       'Accept': 'application/json'
      },
      method: 'GET'
    });
    return await response.json();
  }
}
