import {combineReducers} from 'redux';
import general from './general/reducers';

const rootReducer = combineReducers({
  general,
});

export default rootReducer;
