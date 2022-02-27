import {
  currencyes, languages,
} from '../../helpers/constants';
import { createAction } from '../../helpers/redux';
// import { bookSelector } from '../../helpers/reduxSelectors';
// import { getFilterData } from './bookDuck';

// colors, colorTarget,
// const CHANGE_COLOR = 'configsDuck/CHANGE_COLOR';
// const CHANGE_TARGET = 'configsDuck/CHANGE_TARGET';
const CHANGE_CURRENCY = 'configsDuck/CHANGE_CURRENCY';
const CHANGE_LANGUAGE = 'configsDuck/CHANGE_LANGUAGE';

export const getChangeCurrency = createAction(CHANGE_CURRENCY);
export const getChangeLanguage = createAction(CHANGE_LANGUAGE);

// export const changeColor = (payload) => ({
//   type: CHANGE_COLOR,
//   payload,
// });
// export const changeTarget = (payload) => ({
//   type: CHANGE_TARGET,
//   payload,
// });

export const changeCurrencyData = (id) => (dispatch) => {
  dispatch(getChangeCurrency(id));
};
export const changeLanguageData = (id) => (dispatch) => {
  dispatch(getChangeLanguage(id));
};

// export const fetchMessages = (/* payload */) => (dispatch) => {
//   fetch('url')
//     .then((res) => res.json())
//     .then((res) => dispatch(changeColor(res)));
// };

const initialStateConfigs = {
  // color: colors[0],
  // target: colorTarget[0].target,
  changeCurrency: currencyes[0].target,
  chnageLanguage: languages[0].target,
};

const ConfigsDuck = (state = initialStateConfigs, { type, payload }) => {
  switch (type) {
    // case CHANGE_COLOR:
    //   return {
    //     ...state,
    //     color: payload,
    //   };
    // case CHANGE_TARGET:
    //   return {
    //     ...state,
    //     target: payload,
    //   };
    case CHANGE_CURRENCY:
      return {
        ...state,
        changeCurrency: payload,
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        chnageLanguage: payload,
      };
    default:
      return state;
  }
};

export default ConfigsDuck;
