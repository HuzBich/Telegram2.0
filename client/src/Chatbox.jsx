import React from 'react';
import "./Chatbox.scss"

const Chatbox = (params) => {
    return (
        <div id="chat-box">
            <input type="text"/>
            <button>Send</button>
        </div>
    );
};

export default Chatbox;