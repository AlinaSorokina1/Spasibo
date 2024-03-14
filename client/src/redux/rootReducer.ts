import { combineReducers } from 'redux';

import studentReducer from '../page/Students/reducer/studentReducer';

const rootReducer = combineReducers({
  students: studentReducer,
  //   auth: authReducer,
});

export default rootReducer;
