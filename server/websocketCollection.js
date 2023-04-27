class WebsocketCollection {
    constructor() {
        this.websockets = [];
    }
    add(ws, username) {
        this.websockets.push({ws, username});
    }
    delete(ws) {
        this.websockets = this.websockets.filter(s => s.ws !== ws);
    }
    get(username) {
        return this.websockets.find(ws => ws.username === username).ws;
    }
}


module.exports = new WebsocketCollection();