import UserProfile from '@/components/user/userProfile'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

const UserProfilePage = () => {
    const form = useSelector()
    return(<UserProfile form={form}/>)
}

export default UserProfilePage