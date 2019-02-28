import { combineReducers } from 'redux';
import AuthReducers from './AuthReducer';
import EmployeeFormReducers from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducers,
  employeeForm: EmployeeFormReducers
})