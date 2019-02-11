const Logger = require('./Logger');
const Store = require('./Store');
const Shopper = require('./Shopper');

const logger = new Logger().getInstance();

logger.log('App loading...');

const Florian = new Shopper('Florian', '123456789');
const tech_shop = new Store('Go2store - Future Tech Now', [{
        item: 'Super Quantum Calculator',
        qty: 6,
        price: '356,998'
    },
    {
        item: 'Quantum Satellite Phone',
        qty: 14,
        price: '31,998'
    }
]);

logger.log('... Finished Configuration.');

console.log(`${logger.count} logs total.`)
