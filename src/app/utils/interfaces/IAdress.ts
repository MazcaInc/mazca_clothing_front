import IUser from "./IUser";

export default interface IAdress {
    userID: IUser["userID"];
    adressID: string;
    city: string;
    state: string;
    country: string;
    street: string;
    complement: string;
    zip_code: string;
}
