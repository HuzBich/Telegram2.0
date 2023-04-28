const bcrypt = require('bcrypt');

const hashedPassword = "$2b$10$eYlAKCSAtrSrZbcByQsj/..iekQD5N7gEZtWy0dunhdI2EUXJDAUm"

class Service {
    compareAdminPassword(password) {
        return bcrypt.compare(password, hashedPassword);
    }
}

module.exports = new Service();