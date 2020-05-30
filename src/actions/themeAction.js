import { CONSTANTS } from '../actions';

export const toggleTheme = () => {
  return {
    type: CONSTANTS.TOGGLE_THEME,
    payload: {},
  };
};
