
import { combineReducers } from 'redux';

import studentReducer from '../page/Students/reducer/studentReducer';
import authReducer from '../page/Auth/reducer/reducerAuth';


const rootReducer = combineReducers({
  students: studentReducer,
  auth: authReducer,
});

export default rootReducer;
