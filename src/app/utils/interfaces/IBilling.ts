import IUser from "./IUser";
import { PaymentMethodEnum } from "@enums/user/PaymentMethodEnum";
import { PixKeyEnum } from "@enums/user/PixKeyEnum";

export default interface IBilling {
    userID: IUser["userID"];
    billingID: string;
    payment_method: PaymentMethodEnum;
    pix_key: PixKeyEnum;
    boleto_code: string;
    card_number: string;
    card_expiry: string;
    card_cvv: string;
    created_at: string;
    updated_at: string;
}
