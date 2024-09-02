"use strict";
class CustomerClass {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let newMyCustomer = new CustomerClass("Martin", "Dixon");
console.log(newMyCustomer.firstName);
console.log(newMyCustomer.lastName);
