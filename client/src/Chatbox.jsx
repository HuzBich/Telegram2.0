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

    const keyPressHandler = (e) => {
        if (e.key === 'Enter') {
            sendMessage()
        }
    }


    useEffect(() => {
        if (params.ws === null) return
        params.ws.onmessage = (e) => {
            const data = JSON.parse(e.data)
            if (data.sender === params.activeChat) {
                setMessages([...messages, data])
            }
        }
    }, [params.ws, messages])

    useEffect(() => {
        if (params.activeChat === '') return
        Api.getMessages(params.userName, params.activeChat).then(res => setMessages([...res.data]))
    }, [params.activeChat])

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
            {
                params.activeChat !== '' && (<div className="message-input-field">
                    <input onKeyPress={keyPressHandler} ref={messageInput} type="text"/>
                    <button onClick={sendMessage}>Send</button>
                </div>)
            }

        </div>
    );
};

export default Chatbox;