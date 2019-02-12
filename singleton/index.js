const logger = require('./Logger');
const Store = require('./Store');
const Shopper = require('./Shopper');

logger.log('App loading...');

const florian = new Shopper('Florian', '123456789');
const tech_shop = new Store('Go2store - Future Tech Now', [{
    item: 'Super Quantum Calculator',
    qty: 6,
    price: '356998'
},
{
    item: 'Quantum Satellite Phone',
    qty: 14,
    price: '31998'
}
]);

logger.log('... Finished Configuration.');

logger.log(`${florian.name} bought a ${tech_shop.inventory[1].item}`);

logger.log(`He now has ${florian.money - tech_shop.inventory[1].price} money`);

logger.log(`${logger.count} logs total.`);
