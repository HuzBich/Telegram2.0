import axios from 'axios';

const API_URL = 'http://18.183.103.182:5000';

class Api {
    login(userName) {
        return axios.post(API_URL + `/login`, {userName})
    }

    getChats(userName) {
        return axios.get(API_URL + `/chats?userName=${userName}`)
    }

    searchUsers(queryString) {
        return axios.get(API_URL + `/users?search=${queryString}`)
    }

    addFriend(userName, friendName) {
        return axios.post(API_URL + `/addFriend`, {userName, friendName})
    }

    sendMessage(userName, activeChat, messageText) {
        return axios.post(API_URL + `/message`, {userName, activeChat, messageText})
    }

    getMessages(userName, activeChat) {
        return axios.get(API_URL + `/messages?userName=${userName}&activeChat=${activeChat}`)
    }

    loginAdmin(password) {
        return axios.post(API_URL + `/admin`, {password})
    }

    getAdminChats(password) {
        return axios.post(API_URL + `/adminChats`, {password})
    }
}

export default new Api();