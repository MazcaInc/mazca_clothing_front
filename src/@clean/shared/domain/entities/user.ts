import IAdress from "@interfaces/IAdress";
import IBilling from "@interfaces/IBilling";
import IUser from "@interfaces/IUser";
import { EntityError } from "@helpers/errors/domain-error";
import { UserTypeEnum } from "@enums/UserTypeEnum";

export class User {
    private _userID: string;
    private _name: string;
    private _email: string;
    private _password: string;
    private _phone: string;
    private _cpf: string;
    private _user_type: UserTypeEnum;
    private _adress: IAdress;
    private _billing: IBilling;

    constructor(user: IUser) {
        if (!User.validateUserID(user.userID)) {
            throw new EntityError("userID");
        }
        this._userID = user.userID;
        if (!User.validateName(user.name)) {
            throw new EntityError("name");
        }
        this._name = user.name;
        if (!User.validateEmail(user.email)) {
            throw new EntityError("email");
        }
        this._email = user.email;
        if (!User.validatePassword(user.password)) {
            throw new EntityError("password");
        }
        this._password = user.password;
    }

    get userID() {
        return this._userID;
    }

    set userID(userID: string) {
        if (!User.validateUserID(userID)) {
            throw new EntityError("userID");
        }
        this._userID = userID;
    }

    static validateUserID(userID: string) {
        if (userID === null) return false;
        else if (userID.length !== 36) return false;
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(userID);
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        if (!User.validateName(name)) {
            throw new EntityError("name");
        }
        this._name = name;
    }

    static validateName(name: string) {
        if (name == null) {
            return false;
        } else if (name.trim() == "") {
            return false;
        }
        return true;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        if (!User.validateEmail(email)) {
            throw new EntityError("email");
        }
        this._email = email;
    }

    static validateEmail(email: string) {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (email == null) {
            return false;
        } else if (email.trim() == "") {
            return false;
        } else if (!emailRegex.test(email)) {
            return false;
        }
        return true;
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
        if (password.length < 6) return false;
        else if (typeof password !== typeof "string") return false;
        return true;
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
            adress: this._adress,
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
            adress: json.adress,
            billing: json.billing
        });
    }
}
