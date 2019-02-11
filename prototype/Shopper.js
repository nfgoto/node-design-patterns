class Shopper {

    constructor(name) {
        this._name = name
        this._shoppingList = []

        console.log(`New Shopper ${name} created.`)
    }

    set name(value) {
        this._name = value
    }

    get name() {
        return this._name
    }

    set shoppingList(item) {
        this._shoppingList.push(item)
    }

    get shoppingList() {
        return this._shoppingList.join(', ')
    }

    addItemToList(item) {
        this._shoppingList.push(item)
    }

    clone(){
        // grab the prototype of the current instance
        const proto = Object.getPrototypeOf(this)
        // create a clone object by linking the prototype of the instance to retrieve all methods/getters/setters
        const cloned = Object.create(proto)
        // clone the current values also
        cloned._name = this._name
        cloned._shoppingList = [...this._shoppingList]
        return cloned
    }
}

module.exports = Shopper;