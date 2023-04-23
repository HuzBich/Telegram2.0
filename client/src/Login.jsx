import React from 'react';
import "./Login.scss"

const Login = (params) => {
    const submitHandler = () => {
        const input = document.getElementById('username-input')
        localStorage.setItem('userName', input.value);
        params.setUserName(input.value)
    }

    return (
        <div className="login-page">
            <h1>Enter your username:</h1>
            <input id="username-input" type="text"/><br/>
            <button id="signin-button" onClick={submitHandler}>Sign in</button>
        </div>
    );
};

export default Login;