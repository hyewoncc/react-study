import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function Header(props) {

    const goLoginPage = () => {
        props.history.push('/login')
    }

    const goRegisterPage = () => {
        props.history.push('/register')
    }

    const goHelloPage = () => {
        props.history.push('/')
    }

    const logoutHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                if(response.data.success) {
                    props.history.push("/login")
                } else {
                    alert('로그아웃 실패')
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            width: '100%', height: '10vh', marginLeft: '30px'
        }}>
            <h1 onClick={goHelloPage}>Hello Node React</h1>
            <div style={{
                display: 'flex', justifyContent: 'flex-end', 
                alignItems:'center', width: '40%', paddingRight: '30px'
            }}>
                <h4 style={{marginRight: '30px'}} onClick={goLoginPage}>Login</h4>
                <h4 style={{marginRight: '30px'}} onClick={logoutHandler}>Logout</h4>
                <h4 style={{marginRight: '30px'}} onClick={goRegisterPage}>Register</h4>
            </div>
        </div>
    )
}

export default withRouter(Header)
