import { CONSTANTS } from '../actions';
const initialState = { darkmode: false };
const themeReducer = (state = JSON.parse(window.localStorage.getItem('theme')) || initialState, action) => {
  switch (action.type) {
    case CONSTANTS.TOGGLE_THEME: {
      return { darkmode: !state.darkmode };
    }
    default:
      return state;
  }
};

export default themeReducer;
