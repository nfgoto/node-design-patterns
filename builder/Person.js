class Person {

    constructor(builder) {
        if (builder.isEmployee) {
            this.isManager = builder.isManager || false;
            this.isEmployee = builder.isEmployee;
            this.hours = builder.hours;
        }
        this.name = builder.name;
        this.money = builder.money || 0;
        this.shoppingList = builder.shoppingList || [];
    }

    toString() {
        return JSON.stringify(this);
    }

}

module.exports = Person;
