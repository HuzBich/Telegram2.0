import React, {useEffect, useState} from 'react';
import "./Chats.scss"
import Chatbox from "./Chatbox";
import Sidebar from "./Sidebar";

const Chats = (params) => {
    const [activeChat, setActiveChat] = useState('')

    return (
        <div className="content-block">
            <div className="centered-block">
                <Sidebar userName={params.userName} setUserName={params.setUserName} activeChat={activeChat} setActiveChat={setActiveChat}/>
                <Chatbox userName={params.userName} activeChat={activeChat}/>
            </div>
        </div>
    );
};

export default Chats;