import axios from 'axios';

const API_URL = 'http://localhost:5000';

class Api {
    getChats(userName) {
        return axios.get(API_URL + `/chats?userName=${userName}`)
    }

    searchUsers(queryString) {
        return axios.get(API_URL + `/users?search=${queryString}`)
    }

    addFriend(userName, friendName) {
        return axios.post(API_URL + `/addFriend`, {userName, friendName})
    }
}

export default new Api();