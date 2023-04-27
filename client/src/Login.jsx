import React from 'react';
import "./Login.scss"
import Api from "./Api";

const Login = (params) => {
    const submitHandler = () => {
        const input = document.getElementById('username-input')
        localStorage.setItem('userName', input.value);
        Api.login(input.value).then(() => params.setUserName(input.value))
    }

    const keypressHandler = (e) => {
        if (e.key === 'Enter') {
            submitHandler()
        }
    }

    return (
        <div className="login-page">
            <h1>Enter your username:</h1>
            <input onKeyPress={keypressHandler} id="username-input" type="text"/><br/>
            <button id="signin-button" onClick={submitHandler}>Sign in</button>
        </div>
    );
};

export default Login;