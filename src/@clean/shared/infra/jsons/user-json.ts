import IUser from "@interfaces/IUser";
import { UserTypeEnum } from "@enums/UserTypeEnum";
import { PaymentMethodEnum } from "@enums/PaymentMethodEnum";

export class UserJson {
    static userJson: IUser[] = [
        {
            userID: "fb0ec5d9-ef2f-4082-be29-a13642a81a2b",
            user_type: UserTypeEnum.CLIENT,
            name: "Alissandro",
            cpf: "536-943-648.70",
            email: "euseiler@gmail.com",
            phone: "11955501739",
            password: "flavioV1@d0",
            adress: {
                userID: "fb0ec5d9-ef2f-4082-be29-a13642a81a2b",
                adressID: "fb0ec5d9-ef2f-4082-be29-a13642a8112b",
                city: "São Paulo",
                country: "Brasil",
                state: "SP",
                street: "Rua turubango turusbago",
                complement: "apto 187, torre 81",
                zip_code: "04184-000"
            },
            billing: {
                userID: "fb0ec5d9-ef2f-4082-be29-a13642a81a2b",
                billingID: "fb0ec5d9-gggg-4082-be29-a13642a81a2b",
                card_cvv: "111",
                boleto_code: "36721567",
                card_expirity: "14/10/2025",
                created_at: "02/04/2021",
                updated_at: "04/07/2023",
                pix_key: "253671652983721931",
                card_number: "623516735217631",
                payment_method: PaymentMethodEnum.BOLETO
            }
        }
    ];
}
