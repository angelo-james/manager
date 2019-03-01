import { combineReducers } from 'redux';
import AuthReducers from './AuthReducer';
import EmployeeFormReducers from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducers,
  employeeForm: EmployeeFormReducers,
  employees: EmployeeReducer
})