import { combineReducers } from 'redux';
import { UserData } from './UserDataReducer';

const RootReducer = combineReducers({
    userData : UserData
    
});

export default RootReducer;