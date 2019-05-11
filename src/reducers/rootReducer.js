import { combineReducers } from 'redux';
import leasesReducer from './leasesReducer';
import getLeaseReducer from './getLeaseReducer';


export default combineReducers({
    leasesReducer,
    getLeaseReducer
})