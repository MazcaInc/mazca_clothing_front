import IUser from "./IUser";
import { BrazilianStateEnum } from "@enums/user/BrazilianStateEnum";
import { CountriesEnum } from "@enums/user/CountriesEnum";

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
