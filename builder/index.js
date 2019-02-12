var PersonBuilder = require('./PersonBuilder');

// Employees
var florian = new PersonBuilder('Florian').makeEmployee().makeManager(60).build();
var bakari = new PersonBuilder('Bakari').makeEmployee().makePartTime().build();
var pinya = new PersonBuilder('Pinya').makeEmployee().build();

// Shoppers
var toto = new PersonBuilder('Toto')
    .withMoney(500)
    .withList(['tablet', 'earphones'])
    .build();

var tata = new PersonBuilder('Tata').withMoney(1000).build();

[florian, bakari, pinya, toto, tata].forEach(person => console.log(person));