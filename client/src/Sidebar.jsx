import React from 'react';
import "./Sidebar.scss"

const Sidebar = (params) => {
    return (
        <div id="side-bar">
            <header>
                {params.userName}
                <button id="logout-button" onClick={e => {localStorage.setItem('userName', '');params.setUserName('')}}>Logout</button>
            </header>

        </div>
    );
};

export default Sidebar;