import { ObjectValues } from "@enums/ObjectValues.ts";

export const PixKeyEnum = {
    CPF: "CPF",
    CNPJ: "CNPJ",
    EMAIL: "EMAIL",
    PHONE: "PHONE",
    QR_CODE: "QR_CODE",
    RANDOM_KEY: "RANDOM_KEY",
    AGENCY: "AGENCY"
};

export type PixKeyEnum = ObjectValues<typeof PixKeyEnum>;
