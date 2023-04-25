import './App.scss';
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import Login from "./Login";
import Chats from "./Chats";
import Admin from "./Admin";

function App() {
    const [userName, setUserName] = useState(localStorage.getItem('userName') || '')

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={
                    userName === '' ?
                        <Login setUserName={setUserName}/>
                        :
                        <Chats userName={userName} setUserName={setUserName}/>
                }/>
                <Route path='/admin' element={<Admin/>} />
            </Routes>
        </div>
    );
}

export default App;
