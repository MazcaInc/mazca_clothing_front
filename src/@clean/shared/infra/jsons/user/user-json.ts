import IUser from "@interfaces/IUser";
import { UserTypeEnum } from "@enums/UserTypeEnum";
import { PaymentMethodEnum } from "@enums/user/PaymentMethodEnum";
import { BrazilianStateEnum } from "@enums/user/BrazilianStateEnum";
import { CountriesEnum } from "@enums/user/CountriesEnum";

export const userJson: IUser[] = [
    {
        userID: "fb0ec5d9-ef2f-4082-be29-a13642a81a2b",
        user_type: UserTypeEnum.CLIENT,
        name: "Alissandro",
        cpf: "536-943-648.70",
        email: "euseiler@gmail.com",
        phone: "11978591739",
        password: "flavioV1@d0",
        address: {
            userID: "fb0ec5d9-ef2f-4082-be29-a13642a81a2b",
            addressID: "fb0ec5d9-ef2f-4082-be29-a13642a8112b",
            city: "São Paulo",
            country: CountriesEnum.BR,
            state: BrazilianStateEnum.SP,
            street: "Rua turubango turusbago",
            complement: "apto 187, torre 81",
            zip_code: "03284-050"
        },
        billing: {
            userID: "fb0ec5d9-ef2f-4082-be29-a13642a81a2b",
            billingID: "fb0ec5d9-gggg-4082-be29-a13642a81a2b",
            card_cvv: "111",
            boleto_code: "36721567",
            card_expiry: "14/10/2025",
            created_at: "02/04/2021",
            updated_at: "04/07/2023",
            pix_key: "253671652983721931",
            card_number: "623516735217631",
            payment_method: PaymentMethodEnum.BOLETO
        }
    }
];
