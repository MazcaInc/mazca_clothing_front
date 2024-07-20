import IAdress from "./IAdress";
import IBilling from "./IBilling";
import { UserTypeEnum } from "@enums/UserTypeEnum";

export default interface IUser {
    userID: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    cpf: string;
    user_type: UserTypeEnum;
    adress: IAdress;
    billing: IBilling;
}
