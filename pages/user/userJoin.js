import UserJoin from '@/components/user/UserJoin'
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

const UserJoinPage = () => {
    const form = useSelector()
    return(<UserJoin onSubmit ={onSubmit} onChange ={onChange} form={form}  />)
}
export default UserJoinPage