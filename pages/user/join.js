import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import tableStyles from '../common/styles/table.module.css'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import {styled} from '@mui/material/styles';
import {purple} from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf'
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
});
const ColorButton = styled(Button)(({theme}) => ({
    color: theme
        .palette
        .getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700]
    }
}));


export default function  Join(){
    const [user, setUser] =useState({
        userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
    })
    const dispatch = useDispatch()
    const handleChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,[name]: value})
    }
    return <form onSubmit={
        e => {
            e.preventDefault()
            alert(' 진행 1: 회원가입 클릭 ');
            dispatch(userActions.joinRequest(user))
            setUser({
                userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
            })
            window.location.href = "./login"
        }
    }
    >
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Stack spacing={2} style={{width:"600px"}}>
        <TextField id="outlined-basic" label="userid" />
        <TextField id="outlined-basic-2" label="password" />
        <TextField id="outlined-basic-2" label="email" />
        <TextField id="outlined-basic-2" label="name" />
        <TextField id="outlined-basic-2" label="phone" />
        <TextField id="outlined-basic-2" label="birth" />
        <TextField id="outlined-basic-2" label="address"/>
    </Stack>
    <Stack spacing={2} direction="row" style={{marginTop:"20px", float: "right"}}>
        <ColorButton variant="contained" style={{width:"100px"}}>회원가입</ColorButton>
        <BootstrapButton variant="contained" disableRipple="disableRipple" style={{width:"100px"}}>
            취소
        </BootstrapButton>
    </Stack>
    </LocalizationProvider>
    </form>
}
