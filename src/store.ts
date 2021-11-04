import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getStudentsReducer,
  getStudentsByIdReducer,
  registerStudentReducer,
  updateStudentReducer,
  studentDeleteReducer,
} from './redux/reducers/studentReducers';
const reducer = combineReducers({
  getStudents: getStudentsReducer,
  getStudentsById: getStudentsByIdReducer,
  registerStudent: registerStudentReducer,
  updateStudent: updateStudentReducer,
  studentDelete: studentDeleteReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
