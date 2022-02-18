import { combineReducers } from 'redux';
import AppDuck from './ducks/appDuck';
import ConfigsDuck from './ducks/configsDuck';
import BookDuck from './ducks/bookDuck';

const rootReducer = combineReducers({
  AppDuck,
  BookDuck,
  ConfigsDuck,
});

export default rootReducer;
