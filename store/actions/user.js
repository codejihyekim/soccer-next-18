import * as UserType from "../types"

export const addUser = user => {
    return{
        type: UserType.USER_ADD_REQUEST,
        payload: user
    }
}
export const updateUser = user => {
    return{
        type: UserType.USER_UPDATE_REQUEST,
        payload: user
    }
}
export const fetchUsers = user => {
    return{
        type: UserType.USER_FETCH_REQUEST,
      
    }
}
export const delUser = user => {
    return{
        type: UserType.USER_DELETE_REQUEST,
        payload: userid
    }
}