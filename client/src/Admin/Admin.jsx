import React, {useState} from 'react';
import Login from "./Login";
import Panel from "./Panel";

const Admin = () => {
    const [password, setPassword] = useState('')

    return (
        <div>{
            password === '' ? <Login setPassword={setPassword}/> : <Panel password={password}/>
        }</div>
    );
};

export default Admin;