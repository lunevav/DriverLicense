import { combineReducers } from 'redux';
import driverLicenseReducer from './driverLicenseReducer';

export default combineReducers({
  license: driverLicenseReducer
})