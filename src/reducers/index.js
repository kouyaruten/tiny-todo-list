import { combineReducers } from 'redux';
import listReducer from './ListReducer';
import themeReducer from './themeReducer';
export default combineReducers({
  lists: listReducer,
  theme: themeReducer,
});
