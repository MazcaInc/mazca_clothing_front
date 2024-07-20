import IAddress from "@interfaces/IAddress";
import IBilling from "@interfaces/IBilling";
import IUser from "@interfaces/IUser";
import { EntityError } from "@helpers/errors/domain-error";
import { UserTypeEnum } from "@enums/UserTypeEnum";
import { Address } from "@entities/user/address";
import { Billing } from "@entities/user/billing";

export class User {
    private _userID: string;
    private _name: string;
    private _email: string;
    private _password: string;
    private _phone: string;
    private _cpf: string;
    private _user_type: UserTypeEnum;
    private readonly _address: IAddress;
    private readonly _billing: IBilling;

    constructor(user: IUser) {
        if (!User.validateUserID(user.userID)) throw new EntityError("userID");
        this._userID = user.userID;
        if (!User.validateName(user.name)) throw new EntityError("name");
        this._name = user.name;
        if (!User.validateEmail(user.email)) throw new EntityError("email");
        this._email = user.email;
        if (!User.validatePassword(user.password))
            throw new EntityError("password");
        this._password = user.password;
        if (!User.validatePhone(user.phone)) throw new EntityError("phone");
        this._phone = user.phone;
        if (!User.validateCPF(user.cpf)) throw new EntityError("cpf");
        this._cpf = user.cpf;
        if (!User.validateUserType(user.user_type))
            throw new EntityError("user_type");
        this._user_type = user.user_type;
        new Address(user.address);
        this._address = user.address;
        new Billing(user.billing);
        this._billing = user.billing;
    }

    get userID() {
        return this._userID;
    }

    set userID(userID: string) {
        if (!User.validateUserID(userID)) throw new EntityError("userID");
        this._userID = userID;
    }

    static validateUserID(userID: string) {
        if (userID.trim().length !== 36) return false;
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(userID);
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        if (!User.validateName(name)) throw new EntityError("name");
        this._name = name;
    }

    static validateName(name: string) {
        return name.trim().length >= 2;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        if (!User.validateEmail(email)) throw new EntityError("email");
        this._email = email;
    }

    static validateEmail(email: string) {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (email.trim().length < 6) {
            return false;
        }
        return emailRegex.test(email);
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        if (!User.validatePassword(password)) {
            throw new EntityError("password");
        }
        this._password = password;
    }

    static validatePassword(password: string) {
        return password.trim().length >= 6;
    }

    get phone() {
        return this._phone;
    }

    set phone(phone: string) {
        if (!User.validatePhone(phone)) throw new EntityError("phone");
        this._phone = phone;
    }

    static validatePhone(phone: string) {
        const phoneRegex = /^\d{11}$/;
        return phoneRegex.test(phone);
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf: string) {
        if (!User.validateCPF(cpf)) throw new EntityError("cpf");
        this._cpf = cpf;
    }

    static validateCPF(cpf: string) {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfRegex.test(cpf)) return false;
        cpf = cpf.replace(/\D+/g, "");
        let sum = 0;
        let remainder;
        if (cpf === "00000000000") return false;
        for (let i = 1; i <= 9; i++)
            sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.substring(9, 10))) return false;
        sum = 0;
        for (let i = 1; i <= 10; i++)
            sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        return remainder === parseInt(cpf.substring(10, 11));
    }

    get user_type(): UserTypeEnum {
        return this._user_type;
    }

    set user_type(user_type: UserTypeEnum) {
        if (!User.validateUserType(user_type))
            throw new EntityError("user_type");
        this._user_type = user_type;
    }

    static validateUserType(user_type: UserTypeEnum) {
        return Object.values(UserTypeEnum).includes(user_type);
    }

    toJson(): IUser {
        return {
            userID: this._userID,
            name: this._name,
            email: this._email,
            user_type: this._user_type,
            cpf: this._cpf,
            phone: this._phone,
            password: this._password,
            address: this._address,
            billing: this._billing
        };
    }

    static fromJson(json: IUser): User {
        return new User({
            userID: json.userID,
            name: json.name,
            email: json.email,
            user_type: json.user_type,
            cpf: json.cpf,
            phone: json.phone,
            password: json.password,
            address: json.address,
            billing: json.billing
        });
    }
}
