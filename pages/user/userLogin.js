import UserLogin from '@/components/user/UserLogin'
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'


const UserLoginPage = () => {
    const dispatch = useDispatch()
    const form = useSelector()
    const onSubmit = e => {
        e.preventDefault()
        const {userid, password } = form
    }
    const onChange = e => {
        e.preventDefault()
    }
    return(<UserLogin onSubmit={onSubmit} onChange={onChange} form={form}/>)
}
export default UserLoginPage