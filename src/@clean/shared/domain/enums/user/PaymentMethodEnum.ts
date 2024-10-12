import { ObjectValues } from "@enums/ObjectValues.ts";

export const PaymentMethodEnum = {
    PIX: 1,
    BOLETO: 2,
    DEBIT_CARD: 3,
    CREDIT_CARD: 4
};

export type PaymentMethodEnum = ObjectValues<typeof PaymentMethodEnum>;
