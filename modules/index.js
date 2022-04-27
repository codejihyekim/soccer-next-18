import { all } from "redux-saga/effects";
import { combineReducers } from 'redux'
import loading from './loading'
import counter, {counterSaga} from './counter'
import user, {userSaga} from './user'
import auth, {authSaga} from './auth'

const rootReducer = combineReducers({
    counter,
    user,
    loading,
    auth
});

export function* rootSaga(){
    yield all([counterSaga(), userSaga(), authSaga()]);
}

export default rootReducer;