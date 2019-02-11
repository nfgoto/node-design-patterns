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

/**
 * class to create only one instance of the Logger
 */
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Logger();
        }
    }

    /**
     * @returns Logger
     */
    getInstance() {
        return Singleton.instance;
    }
}

module.exports = Singleton;