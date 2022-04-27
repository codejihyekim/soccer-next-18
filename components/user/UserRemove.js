import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';
import tableStyles from '../common/styles/table.module.css'

const UserRemove = ({onSubmit, onChange, form}) => {
    
    return <form onSubmit={onSubmit}>
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>회원탈퇴 확인</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>사용자ID</b></td>
                    <td><input type="text" name='userid' onChange={onChange} value={form.userid}/></td>
                </tr>
                <tr>
                    <td><b>비밀번호</b></td>
                    <td><input type="text" name='password' onChange={onChange} value={form.password} /></td>
                </tr>
                <tr>
                    <td colSpan={2}><button type="submit">회원탈퇴</button></td>
                </tr>
            </tbody>
        </table>
    </form>
}    

export default UserRemove