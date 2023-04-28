import React from 'react';
import {useEffect, useState} from "react";
import Api from "../Api";
import "../Sidebar.scss"

const Sidebar = (params) => {
    const [chats, setChats] = useState([])

    const loadChats = () => {
        Api.getAdminChats(params.password).then(res => setChats([...res.data]))
    }

    useEffect(loadChats, [])

    return (
        <div id="side-bar">
            <header>
                {params.userName}
            </header>
            <div className="chats">{
                chats.map((chat, index) => <>
                    <div className={"chat" + (params.activeChat === chat ? " active" : "")} key={index} onClick={e => params.setActiveChat(chat)}>
                        {chat.from} - {chat.to}
                    </div>
                </>)
            }</div>

        </div>
    );
};

export default Sidebar;