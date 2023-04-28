import React, {useEffect, useRef, useState} from 'react';
import "../Chatbox.scss"
import Api from "../Api";

const Chatbox = (params) => {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        if (params.activeChat === '') return
        Api.getMessages(params.userName, params.activeChat).then(res => setMessages([...res.data]))
    }, [params.activeChat, params.userName])


    useEffect(() => {
        const scrollable = document.getElementsByClassName("messages-container")[0]
        scrollable.scrollTop = scrollable.scrollHeight;
    }, [messages])

    return (
        <div id="chat-box">
            <div className="messages-container">
                {
                    messages.map((message, index) => <div className="message">
                        {message.sender}: {message.text}
                    </div>)
                }
            </div>
        </div>
    );
};

export default Chatbox;