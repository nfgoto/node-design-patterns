const Person = require('./Person');

class PersonBuilder {

    constructor(name) {
        this.name = name;
    }

    makeEmployee(hours = 39) {
        this.isEmployee = true;
        this.hours = hours;
        // to make the method chainable (fluent API pattern)
        return this;
    }

    makeManager(hours = 50) {
        this.isManager = true;
        this.hours = hours;
        return this;
    }

    makePartTime(hours = 25) {
        this.isEmployee = true;
        this.hours = hours;
        return this;
    }

    withMoney(amount = 0) {
        this.money = amount;
        return this;
    }

    withList(list) {
        this.shoppingList = list;
        return this;
    }

    build() {
        return new Person(this);
    }
}

module.exports = PersonBuilder;