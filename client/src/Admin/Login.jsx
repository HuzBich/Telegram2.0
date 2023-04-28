import React from 'react';
import Api from "../Api";
import '../Login.scss'

const Login = (params) => {
    const submitHandler = () => {
        const input = document.getElementById('username-input')
        Api.loginAdmin(input.value).then((res) => {
            if (res.data.success) {
                params.setPassword(input.value)
            } else {
                alert('Wrong password')
            }
        })
    }

    const keypressHandler = (e) => {
        if (e.key === 'Enter') {
            submitHandler()
        }
    }

    return (
        <div className="login-page">
            <h1>Enter admin password:</h1>
            <input onKeyPress={keypressHandler} id="username-input" type="text"/><br/>
            <button id="signin-button" onClick={submitHandler}>Sign in</button>
        </div>
    );
};

export default Login;