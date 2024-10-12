import IUser from "./IUser";
import { BrazilianStateEnum } from "@enums/auth/brazil/BrazilianStateEnum.ts";
import { CountriesEnum } from "@enums/auth/international/CountriesEnum.ts";

export default interface IAddress {
    userID: IUser["userID"];
    addressID: string;
    city: string;
    state: BrazilianStateEnum;
    country: CountriesEnum;
    street: string;
    complement?: string;
    zip_code: string;
}
