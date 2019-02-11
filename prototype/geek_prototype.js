const Shopper = require('./Shopper');

const geek_prototype = new Shopper();
geek_prototype.addItemToList('Quantum Display');
geek_prototype.addItemToList('Quantum USB Hub');
geek_prototype.addItemToList('6G Mobile Router');

module.exports = geek_prototype;