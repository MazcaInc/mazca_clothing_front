import IUser from "./IUser";
import { PaymentMethodEnum } from "@enums/PaymentMethodEnum";

export default interface IBilling {
    userID: IUser["userID"];
    billingID: string;
    payment_method: PaymentMethodEnum;
    pix_key: string;
    boleto_code: string;
    card_number: string;
    card_expirity: string;
    card_cvv: string;
    created_at: string;
    updated_at: string;
}
