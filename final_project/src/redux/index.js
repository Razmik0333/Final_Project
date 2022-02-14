import { combineReducers } from 'redux';
import AppDuck from './ducks/appDuck';
import ConfigsDuck from './ducks/configsDuck';

const rootReducer = combineReducers({
  AppDuck,
  ConfigsDuck,
});

export default rootReducer;
