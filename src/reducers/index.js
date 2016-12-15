import { combineReducers } from 'redux';

import WeatherReducer from './recucer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
