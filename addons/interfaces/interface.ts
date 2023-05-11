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


interface IItem {
    id: number;
    name: string;
    rarity : string;
    weapon: string;
    pattern: string;
    float: string;
    image: string;
    price: string;
}
export interface ILoadout {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
    items: IItem[];
}

export interface IUser {
    email: string;
    username: string;
    password: string;
    avatar: string;
    createdAt: string;
}