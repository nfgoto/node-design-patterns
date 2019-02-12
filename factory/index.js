var UserFactory = require('./UserFactory');

var florian = UserFactory('Florian GOTO', 123456789);
var tatu = UserFactory('Eve Porcello', 123456, 'employee', 'Go2Shop');

console.log(florian.toString());
console.log(tatu.toString());
