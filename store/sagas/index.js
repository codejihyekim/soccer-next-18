import { all } from 'redux-saga/effects'
import  { watchAddUser } from "./user";

export default function* rootsSaga(){
    yield all([
        watchAddUser()
    ])
}