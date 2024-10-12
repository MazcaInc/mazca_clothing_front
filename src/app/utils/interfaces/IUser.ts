import IAddress from "./IAddress";
import IBilling from "./IBilling";
import { UserTypeEnum } from "@enums/auth/UserTypeEnum.ts";

export default interface IUser {
    userID: string;
    name: string;
    email: string;
    password: string;
    phone?: string;
    cpf?: string;
    user_type: UserTypeEnum;
    address?: IAddress[];
    billing?: IBilling[];
}
