import React, {useEffect, useState} from 'react'
import UserLogin from 'react'
import userSelector from 'react-redux'

const UserLoginPage = () => {
    const form = userSelector()
    return(<UserLogin onSubmit={onSubmit} onChange={onChange} form={form}/>)
}
export default UserLoginPage