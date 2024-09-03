class CustomerClass{
    
    constructor(private _firstName: string, private _lastName: string){
    }

    public get firstName(): string{
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string{
        return this._lastName;
    }

    public set lastName(value: string){
        this._lastName = value;
    }
}

let newMyCustomer = new CustomerClass("Martin", "Dixon");

console.log(newMyCustomer.firstName);
console.log(newMyCustomer.lastName);