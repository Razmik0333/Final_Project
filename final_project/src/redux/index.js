import { combineReducers } from 'redux';
import AppDuck from './ducks/appDuck';
import ConfigsDuck from './ducks/configsDuck';
import BookDuck from './ducks/bookDuck';

const rootReducer = combineReducers({
  AppDuck,
  ConfigsDuck,
  BookDuck,
});

export default rootReducer;
