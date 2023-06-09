import React, {useEffect, useState} from 'react';
import "./Sidebar.scss"
import Api from "./Api";

const Sidebar = (params) => {
    const [chats, setChats] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    const loadChats = () => {
        Api.getChats(params.userName).then(res => setChats([...res.data]))
    }

    const searchHandler = (e) => {
        if (e.target.value === '') {
            setIsSearching(false)
        } else {
            setIsSearching(true)
            Api.searchUsers(e.target.value).then(res => {
                setSearchResults(res.data.filter(user => user !== params.userName))
            })
        }
    }

    const addFriend = (username) => {
        Api.addFriend(params.userName, username).then(loadChats)
    }

    useEffect(loadChats, [])

    return (
        <div id="side-bar">
            <header>
                {params.userName}
                <button id="logout-button" onClick={e => {localStorage.setItem('userName', '');params.setUserName('')}}>Logout</button><br/>
            </header>
            <div className="search">
                <input onChange={searchHandler} type="text" placeholder="Find your friends:"/>
            </div>
            <div className="chats">{
                isSearching
                    ?
                    searchResults.map((user, index) => <>
                        <div className={"chat" + (params.activeChat === user ? " active" : "")} key={index}
                             onClick={e => {if (chats.includes(user)) params.setActiveChat(user)}}
                        >
                            {user}
                            {
                                chats.find(chat => chat === user) ?
                                    <></>
                                    :
                                    <button className="add-friend" onClick={() => {setChats([...chats, user]); addFriend(user)}}>+</button>
                            }
                        </div>
                    </>)
                    :
                    chats.map((chat, index) => <>
                        <div className={"chat" + (params.activeChat === chat ? " active" : "")} key={index} onClick={e => params.setActiveChat(chat)}>
                            {chat}
                        </div>
                    </>)
            }</div>

        </div>
    );
};

export default Sidebar;