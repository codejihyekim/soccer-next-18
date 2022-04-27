import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as T from "../types"



function* addUser(action){
    try{
        alert('>>> saga 인지함 ')
        const newUser = yield response.json()
        yield put({
            type: T.USER_ADD_SUCCESSED,
            payload: newUser.data
        }) 
    }catch(error){
        yield put({
            type: T.USER_ADD_FAILED,
            payload: error.message
        })
    }
}
export function* watchAddUser(){
    yield takeLatest(T.LOGIN_REQUESTED, addUser)
}

function* login(action){
    try{
      const res = yield call(loginAPI, action.data)
      yield put({
        type: T.LOGIN_SUCCESS,
        data: res.data
      })
    } catch (err) {
      yield put({
        type: T.LOGIN_FAIL,
        error: err.response.data
      })
    }
  }

export function* watchLogin(){
    yield takeLatest(T.LOGIN_REQUESTED, login)
}