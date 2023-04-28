import React, {useState} from 'react';
import Sidebar from "./Sidebar";
import Chatbox from "./Chatbox";
import "../Chats.scss"

const Panel = (params) => {
    const [activeChat, setActiveChat] = useState({from: '', to: ''})

    return (
        <div>
            <div className="content-block">
                <div className="centered-block">
                    <Sidebar password={params.password} activeChat={activeChat} setActiveChat={setActiveChat} />
                    <Chatbox userName={activeChat.from} activeChat={activeChat.to} />
                </div>
            </div>
        </div>
    );
};

export default Panel;