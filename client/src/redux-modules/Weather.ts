import { createAction, createReducer } from "@reduxjs/toolkit";
import WeatherState from "./definitions/WeatherState";
import { WeatherIndex } from "../api/v1/definitions/Weather";


export const initialState: WeatherState = {
  weathers: [],
  counter: 0,
}

export const types = {
  PUSH_WEATHER: 'PUSH_WEATHER',
  INCREMENT: 'INCREMENT'
};

export const pushWeather = createAction<WeatherIndex>(`weather/${types.PUSH_WEATHER}`);
export const increment = createAction(`weather/${types.INCREMENT}`);

export const weatherReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, _) => {
      state.counter++;
    })
    .addCase(pushWeather, (state, action) => {
      state.weathers.unshift(action.payload);
    })
});
