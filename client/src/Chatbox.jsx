import React, {useEffect, useRef, useState} from 'react';
import "./Chatbox.scss"
import Api from "./Api";

const Chatbox = (params) => {
    const [messages, setMessages] = useState([]);
    const messageInput = useRef()

    const sendMessage = () => {
        if (messageInput.current.value === '') return
        Api.sendMessage(params.userName, params.activeChat, messageInput.current.value)
        setMessages([...messages, {text: messageInput.current.value, sender: params.userName}])
        messageInput.current.value = ''
    }

    useEffect(() => {
        Api.getMessages(params.userName, params.activeChat).then(res => setMessages(res.data))
    }, [])

    return (
        <div id="chat-box">
            {
                messages.map((message, index) => <div>
                    {message.sender}: {message.text}
                </div>)
            }
            <input ref={messageInput} type="text"/>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chatbox;