import React from 'react';
import "./Chats.scss"

const Chats = (params) => {
    return (
        <div>
            {params.userName}
            <button onClick={e => {localStorage.setItem('userName', '');params.setUserName('')}}>Logout</button>
        </div>
    );
};

export default Chats;