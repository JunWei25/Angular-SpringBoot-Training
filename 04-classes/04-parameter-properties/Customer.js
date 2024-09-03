"use strict";
class CustomerClass {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
