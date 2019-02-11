class Logger {
    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({
            message,
            timestamp
        });
        console.log(`${timestamp} -- ${message}`);
    }
}

// Node.js will instantiate an object and cache it, the first time
// every other time the module is consumed, it will refer to the cached object
module.exports = new Logger();