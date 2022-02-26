import { combineReducers } from 'redux';
import AppDuck from './ducks/appDuck';
import ConfigsDuck from './ducks/configsDuck';
import BookDuck from './ducks/bookDuck';
import userDuck from './ducks/userDuck';

const rootReducer = combineReducers({
  AppDuck,
  BookDuck,
  ConfigsDuck,
  userDuck,
});

export default rootReducer;
