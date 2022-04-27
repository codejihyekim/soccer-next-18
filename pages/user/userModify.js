import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import UserModify from '@/components/user/userModify'

const UserModifyPage = () => {
    const form = useSelector()
    return(<UserModify onSubmit={onSubmit} onChange={onChange} form={form} onClick={onClick}/>)
}

export default UserModifyPage