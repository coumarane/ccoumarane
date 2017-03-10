export interface Contact {
    firstName: string;
    lastName: string;
    email: string;
    address?: {
        address1: string;
        address2: string;
        postCode: string;
        city: string;
        country: string;
    };
    message: string;
}