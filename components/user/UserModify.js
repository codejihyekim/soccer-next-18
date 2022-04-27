import React,{useState} from 'react'
import { useDispatch } from 'react-redux';

import tableStyles from '../common/styles/table.module.css'

const UserModify = ({onSubmit, onChange, form, onClick}) => {
    
    return (
        <form onSubmit={onSubmit}>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}><h1>정보수정</h1></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>사용자ID</b></td>
                        <td><input type="text" name='userid' onChange={onChange} value={form.userid}/></td>
                    </tr>
                    <tr>
                        <td><b>비밀번호</b></td>
                        <td><input type="text" name='password' onChange={onChange} value={form.password}/></td>
                    </tr>
                    <tr>
                        <td htmlFor=""><b>이메일</b></td>
                        <td><input type="text" name='email' onChange={onChange} value={form.email}/></td>
                    </tr>
    
                    <tr>
                        <td htmlFor=""><b>이름</b></td>
                        <td><input type="text" name='name' onChange={onChange} value={form.name}/></td>
                    </tr>
    
                    <tr>
                        <td><b>전화번호</b></td>
                        <td><input type="text" name='phone' onChange={onChange} value={form.phone}/></td>
                    </tr>
    
                    <tr>
                        <td><b>생년월일</b></td>
                        <td><input type="text" name='birth' onChange={onChange} value={form.birth}/></td>
                    </tr>
                    <tr>
                        <td><b>주소</b></td>
                        <td><input type="text" name='address' onChange={onChange} value={form.address}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button type="submit" onClick={onClick}>수정</button><br /></td>
                    </tr>
                </tbody>
            </table>
        </form>
        )    
}

export default UserModify
