export interface Contact {
    firstName: string;
    lastName: string;
    email: string;
    address: Address;
    message: string;
}

export interface Address {
    address1: string;
    address2: string;
    postCode: string;
    city: string;
    country: string;
}