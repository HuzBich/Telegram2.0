import React, {useEffect, useState} from 'react';
import "./Chats.scss"
import Chatbox from "./Chatbox";
import Sidebar from "./Sidebar";
import login from "./Login";

const Chats = (params) => {
    const [activeChat, setActiveChat] = useState('')
    const [ws, setWs] = useState(null)

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:5001');

        socket.onopen = () => {
            socket.send(JSON.stringify({type: 'connect', username: params.userName}))
        }
        setWs(socket)

        return () => {socket.close()}
    }, []);

    return (
        <div className="content-block">
            <div className="centered-block">
                <Sidebar userName={params.userName} setUserName={params.setUserName} activeChat={activeChat} setActiveChat={setActiveChat}/>
                <Chatbox userName={params.userName} activeChat={activeChat} ws={ws} />
            </div>
        </div>
    );
};

export default Chats;