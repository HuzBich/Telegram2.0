import React from 'react';
import "./Chats.scss"
import Chatbox from "./Chatbox";
import Sidebar from "./Sidebar";

const Chats = (params) => {
    return (
        <div className="content-block">
            <div className="centered-block">
                <Sidebar userName={params.userName} setUserName={params.setUserName}/>
                <Chatbox userName={params.userName}/>
            </div>
        </div>
    );
};

export default Chats;