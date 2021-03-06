import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserType{
    userid: string;
    phone: string;
    password: string;
    name: string;
    email:string;
    birth:string;
    address:string;
}

export interface UserState{
    loading: boolean;
    data: UserType[];
    loginUser: any;
    error: any;
}

const initialState: UserState = {
    loading: false,
    data: [],
    loginUser: {
        userid: '',
        password: '',  
        email: '',
        name: '',  
        phone: '',
        birth: '',
        address: ''
    },
    error: null  
}

export interface LoginSuccessType {
    data: {
      token: string
    }
    
    config: {
      data: {
        userid: string;
        name: string;
        email: string;
        phone: string;
        address: string;
        password: string;
        birth: string;
      }
  
    }
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, payload){
            alert('진행 2: 회원가입 리듀서 내부')
            state.loading = true; 
        },
        joinSuccess(state: UserState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false; 
        },
        joinFailure(state: UserState, {payload}){
            state.data = payload;
            state.loading = false; 
        },
        loginRequest(state: UserState, payload){
            alert('진행 2: 로그인 리듀서 내부')
            state.loading = true; 
        },
        loginSuccess(state: UserState, action: PayloadAction<LoginSuccessType>){ 
            state.loginUser = action.payload['user']
            state.loading = false;
        },
        loginFailure(state: UserState, {payload}){
            state.data = payload;
            state.loading = false; 
            window.location.href = '/user/login'
        },
        logoutRequest(state: UserState, payload){
            alert('진행 2: 로그아웃 리듀서 내부')
            state.loading = false; 
        },
        logoutSuccess(state: UserState){
            state.loading = false;
            localStorage.clear()
            window.location.href = '/'
        }
    }
})

const { reducer, actions } = userSlice
export const userActions = actions 
export default reducer