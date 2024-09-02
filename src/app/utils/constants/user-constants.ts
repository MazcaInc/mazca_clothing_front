import IUser from "@interfaces/IUser";
import { UserTypeEnum } from "@enums/UserTypeEnum";
import { PaymentMethodEnum } from "@enums/user/PaymentMethodEnum";
import { BrazilianStateEnum } from "@enums/user/BrazilianStateEnum";
import { CountriesEnum } from "@enums/user/CountriesEnum";
import { PixKeyEnum } from "@enums/user/PixKeyEnum";

export const userConstants: IUser[] = [
    {
        userID: "fb0ec5d9-ef2f-4082-be29-a13642a81a2b",
        user_type: UserTypeEnum.CLIENT,
        name: "Alissandro",
        cpf: "532-941-628.78",
        email: "euseiler@gmail.com",
        phone: "11978591739",
        password: "flavioV1@d0",
        address: [
            {
                userID: "fb0ec5d9-ef2f-4082-be29-a13642a81a2b",
                addressID: "fb0ec5d9-ef2f-4082-be29-a13642a8112b",
                city: "São Paulo",
                country: CountriesEnum.BR,
                state: BrazilianStateEnum.SP,
                street: "Rua turubango turusbago",
                complement: "apto 187, torre 81",
                zip_code: "03284-050"
            }
        ],
        billing: [
            {
                userID: "fb0ec5d9-ef2f-4082-be29-a13642a81a2b",
                billingID: "fb0ec5d9-gggg-4082-be29-a13642a81a2b",
                payment_method: PaymentMethodEnum.BOLETO,
                pix_key: [
                    {
                        pix_type: PixKeyEnum.EMAIL,
                        key: "alelima@gmail.com"
                    }
                ],
                debit_card: [
                    {
                        titular_name: "Alissanduro",
                        agency: "0001",
                        account: "11111111",
                        card_cvc: "111",
                        card_number: "6235167352176361",
                        card_expiry: "10/2025"
                    }
                ],
                credit_card: [
                    {
                        titular_name: "Alissanduro",
                        card_cvc: "111",
                        card_number: "6235167352176361",
                        card_expiry: "10/2025"
                    }
                ],
                boleto_code: ["36721567"],
                created_at: "02/04/2021",
                updated_at: "04/07/2023"
            }
        ]
    }
];
