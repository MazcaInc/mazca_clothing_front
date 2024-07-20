import IUser from "@interfaces/IUser";
import { PaymentMethodEnum } from "@enums/user/PaymentMethodEnum";
import IBilling from "@interfaces/IBilling";
import { EntityError } from "@helpers/errors/domain-error";
import { PixKeyEnum } from "@enums/user/PixKeyEnum";

export class Billing {
    private _userID: IUser["userID"];
    private _billingID: string;
    private _payment_method: PaymentMethodEnum;
    private _pix_key: PixKeyEnum;
    private _boleto_code: string;
    private _card_number: string;
    private _card_expiry: string;
    private _card_cvv: string;
    private _created_at: string;
    private _updated_at: string;

    constructor(billing: IBilling) {
        // TODO: fazer validação com base no payment_method, aonde ele só poderá validar os campos com base no payment_method
        if (!Billing.validateUserID(billing.userID))
            throw new EntityError("userID");
        this._userID = billing.userID;
        if (!Billing.validateBillingID(billing.billingID))
            throw new EntityError("billingID");
        this._billingID = billing.billingID;
        if (!Billing.validatePaymentMethod(billing.payment_method))
            throw new EntityError("payment_method");
        this._payment_method = billing.payment_method;
        if (!Billing.validatePixKey(billing.pix_key))
            throw new EntityError("pix_key");
        this._pix_key = billing.pix_key;
        if (!Billing.validateBoletoCode(billing.boleto_code))
            throw new EntityError("boleto_code");
        this._boleto_code = billing.boleto_code;
        if (!Billing.validateCardNumber(billing.card_number))
            throw new EntityError("card_number");
        this._card_number = billing.card_number;
        if (!Billing.validateCardExpiry(billing.card_expiry))
            throw new EntityError("card_expiry");
        this._card_expiry = billing.card_expiry;
        if (!Billing.validateCardCVV(billing.card_cvv))
            throw new EntityError("card_cvv");
        this._card_cvv = billing.card_cvv;
        if (!Billing.validateDate(billing.created_at))
            throw new EntityError("created_at");
        this._created_at = billing.created_at;
        if (!Billing.validateDate(billing.updated_at))
            throw new EntityError("updated_at");
        this._updated_at = billing.updated_at;
    }

    get userID() {
        return this._userID;
    }

    set userID(userID: string) {
        if (!Billing.validateUserID(userID)) throw new EntityError("userID");
        this._userID = userID;
    }

    static validateUserID(userID: string) {
        if (userID === null) return false;
        else if (userID.trim().length !== 36) return false;
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(userID);
    }

    get billingID() {
        return this._billingID;
    }

    set billingID(billingID: string) {
        if (!Billing.validateBillingID(billingID))
            throw new EntityError("billingID");
        this._billingID = billingID;
    }

    static validateBillingID(billingID: string) {
        if (billingID.trim().length !== 36) return false;
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(billingID);
    }

    get payment_method() {
        return this._payment_method;
    }

    set payment_method(paymentMethod: PaymentMethodEnum) {
        if (!Billing.validatePaymentMethod)
            throw new EntityError("payment_method");
        this._payment_method = paymentMethod;
    }

    static validatePaymentMethod(paymentMethod: PaymentMethodEnum) {
        return Object.values(PaymentMethodEnum).includes(paymentMethod);
    }

    get pix_key() {
        return this._pix_key;
    }

    set pix_key(pix_key: PixKeyEnum) {
        if (!Billing.validatePixKey(pix_key)) throw new EntityError("pix_key");
        this._pix_key = pix_key;
    }

    static validatePixKey(pixKey: PixKeyEnum): boolean {
        if (!Object.values(PixKeyEnum).includes(pixKey)) return false;
        const newPixKey = pixKey.toUpperCase();
        if (newPixKey === PixKeyEnum.CPF) {
            const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            return cpfPattern.test(newPixKey);
        }
        if (newPixKey === PixKeyEnum.CNPJ) {
            const cnpjPattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
            return cnpjPattern.test(newPixKey);
        }
        if (newPixKey === PixKeyEnum.EMAIL) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(newPixKey);
        }
        if (newPixKey === PixKeyEnum.PHONE) {
            const phonePattern = /^\d{11}$/;
            return phonePattern.test(newPixKey);
        }
        if (newPixKey === PixKeyEnum.QR_CODE) {
            const qrCodePattern = /^000201/;
            return qrCodePattern.test(newPixKey);
        }
        if (newPixKey === PixKeyEnum.RANDOM_KEY) {
            const randomKeyPattern = /^[A-Za-z0-9]{32}$/;
            return randomKeyPattern.test(newPixKey);
        }
        if (newPixKey === PixKeyEnum.AGENCY) {
            const agencyAccountPattern = /^\d{4}-\d{1,8}$/;
            return agencyAccountPattern.test(newPixKey);
        }
        return false;
    }

    get boleto_code() {
        return this._boleto_code;
    }

    set boleto_code(boleto_code: string) {
        if (!Billing.validateBoletoCode) throw new EntityError("boleto_code");
        this._boleto_code = boleto_code;
    }

    static validateBoletoCode(boletoCode: string) {
        return boletoCode.trim().length === 8;
    }

    get card_number() {
        return this._card_number;
    }

    set card_number(card_number: string) {
        if (!Billing.validateCardNumber(card_number))
            throw new EntityError("card_number");
        this._card_number = card_number;
    }

    static validateCardNumber(cardNumber: string): boolean {
        if (cardNumber.trim().length === 0) return false;
        // Algoritmo de Luhn
        const luhnCheck = (num: string) => {
            const arr = (num + "")
                .split("")
                .reverse()
                .map((x) => parseInt(x));
            const lastDigit = arr.splice(0, 1)[0];
            let sum = arr.reduce(
                (acc, val, i) =>
                    i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9,
                0
            );
            sum += lastDigit;
            return sum % 10 === 0;
        };
        return luhnCheck(cardNumber);
    }

    get card_expiry() {
        return this._card_expiry;
    }

    set card_expiry(card_expiry: string) {
        if (!Billing.validateCardExpiry(card_expiry))
            throw new EntityError("card_expiry");
        this._card_expiry = card_expiry;
    }

    static validateCardExpiry(cardExpiry: string) {
        if (cardExpiry.trim().length === 0) return false;
        const [month, year] = cardExpiry.split("/").map(Number);
        if (isNaN(month)) return false;
        else if (isNaN(year)) return false;
        else if (month < 1) return false;
        else if (month > 12) return false;
        const currentDate = new Date();
        const expiryDate = new Date(year, month - 1);
        return expiryDate > currentDate;
    }

    get card_cvv() {
        return this._card_cvv;
    }

    set card_cvv(card_cvv: string) {
        if (!Billing.validateCardCVV(card_cvv))
            throw new EntityError("card_cvv");
        this._card_cvv = card_cvv;
    }

    static validateCardCVV(cardCVV: string) {
        if (cardCVV.trim().length === 0) return false;
        return /^\d{3,4}$/.test(cardCVV);
    }

    get created_at() {
        return this._created_at;
    }

    set created_at(created_at: string) {
        if (!Billing.validateDate(created_at))
            throw new EntityError("created_at");
        this._created_at = created_at;
    }

    get updated_at() {
        return this._updated_at;
    }

    set updated_at(updated_at: string) {
        if (!Billing.validateDate(updated_at))
            throw new EntityError("updated_at");
        this._updated_at = updated_at;
    }

    // Method to validate created_at and updated_at attributes
    static validateDate(date: string) {
        return isNaN(Date.parse(date));
    }
}
