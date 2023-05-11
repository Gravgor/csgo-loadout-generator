export type ValidationSchemaRegisterInterface = {
    email: string;
    password: string;
    username: string;
}

export type ValidationSchemaLoginInterface = {
    email: string;
    password: string;
}


export interface IValidationGenerateLoadout{
    name: string;
    color: string;
    price: string;
}