import * as T from "../types"

export const addUser = user => {
    return {
        type: T.USER_ADD_REQUEST,
        payload: user
    }
}
export const login = loginInfo => {
    alert('')
    return {
        type: T.LOGIN_REQUEST
    }
}
export const updateUser = user => {
    return {
        type: T.USER_UPDATE_REQUEST,
        payload: user
    }
}
export const delUser = userid => {
    return {
        type: T.USER_DELETE_REQUEST,
        payload: userid
    }
}