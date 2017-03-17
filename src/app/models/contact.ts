export interface Contact {
    first_name: string;
    last_name: string;
    email: string;
    address: Address;
    message: string;
}

export interface Address {
    address1: string;
    address2: string;
    post_code: string;
    city: string;
    country: string;
}