import IUser from "./IUser";
import { PaymentMethodEnum } from "@enums/user/PaymentMethodEnum";
import { PixKeyEnum } from "@enums/user/PixKeyEnum";

export default interface IBilling {
    userID: IUser["userID"];
    billingID: string;
    payment_method: PaymentMethodEnum;
    pix_key?: [
        {
            pix_type: PixKeyEnum;
            key: string;
        }
    ];
    debit_card?: [
        {
            titular_name: string;
            agency: string;
            account: string;
            card_cvc: string;
            card_number: string;
            card_expiry: string;
        }
    ];
    credit_card?: [
        {
            titular_name: string;
            card_cvc: string;
            card_number: string;
            card_expiry: string;
        }
    ];
    boleto_code?: string[];
    created_at: string;
    updated_at: string;
}
