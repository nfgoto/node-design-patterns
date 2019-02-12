const geek_prototype = require('./geek_prototype');

const florian = geek_prototype.clone();
florian.name = 'Florian GOTO';
florian.addItemToList('Voice Assistant');

const tatu = geek_prototype.clone();
tatu.name = 'Tatu MTO';
tatu.addItemToList('Smart Mirror');

console.log(`${florian.name}'s shopping list: [${florian.shoppingList}]`);
console.log(`${tatu.name}'s shopping list: [${tatu.shoppingList}]`);