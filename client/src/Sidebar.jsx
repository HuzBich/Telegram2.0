import React, {useEffect, useState} from 'react';
import "./Sidebar.scss"
import Api from "./Api";

const Sidebar = (params) => {
    const [chats, setChats] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    const loadChats = () => {
        Api.getChats(params.userName).then(res => setChats(res.data))
    }

    const searchHandler = (e) => {
        if (e.target.value === '') {
            setIsSearching(false)
        } else {
            setIsSearching(true)
            Api.searchUsers(e.target.value).then(res => {
                setSearchResults(res.data)
            })
        }
    }

    const addFriend = (username, e) => {
        Api.addFriend(params.userName, username).then(loadChats)
        const addedFriend = searchResults.find(user => user.name === username)
        const newSearchResults = searchResults.filter(user => user.name !== username)
        addedFriend.isFriend = true
        newSearchResults.push(addedFriend)
        newSearchResults.sort((a, b) => a.name.localeCompare(b.name))
        setSearchResults(newSearchResults)
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
                    <div className="chat" key={index}>
                        {user.name}
                        {
                            chats.find(chat => chat.username === user.name)
                            &&
                            <button onClick={addFriend.bind(null, user.name)}>Add</button>
                        }
                    </div>
                </>)
                    :
                chats.map((chat, index) => <>
                    <div className="chat" key={index}>
                        {chat.username}
                    </div>
                </>)
            }</div>
        </div>
    );
};

export default Sidebar;