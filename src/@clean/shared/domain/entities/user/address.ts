import IAddress from "@interfaces/IAddress";
import IUser from "@interfaces/IUser";
import { EntityError } from "@helpers/errors/domain-error";
import { BrazilianStateEnum } from "@enums/user/BrazilianStateEnum";
import { CountriesEnum } from "@enums/user/CountriesEnum";
import { User } from "@entities/user/user";

export class Address {
    private _userID: IUser["userID"];
    private _addressID: string;
    private _city: string;
    private _state: BrazilianStateEnum;
    private _country: CountriesEnum;
    private _street: string;
    private _complement: string;
    private _zip_code: string;

    constructor(address: IAddress) {
        new User(address.userID as unknown as IUser); //TODO: Comparar as diferenças e ver qual estratégia de validação foi mais eficiente
        this._userID = address.userID;
        if (!Address.validateAddressID(address.addressID))
            throw new EntityError("addressID");
        this._addressID = address.addressID;
        if (!Address.validateCity(address.city)) throw new EntityError("city");
        this._city = address.city;
        if (!Address.validateState(address.state))
            throw new EntityError("state");
        this._state = address.state;
        if (!Address.validateCountry(address.country))
            throw new EntityError("country");
        this._country = address.country;
        if (!Address.validateStreet(address.street))
            throw new EntityError("street");
        this._street = address.street;
        if (!Address.validateComplement(address.complement))
            throw new EntityError("complement");
        this._complement = address.complement;
        if (!Address.validateZipCode(address.zip_code))
            throw new EntityError("zip_code");
        this._zip_code = address.zip_code;
    }

    get userID() {
        return this._userID;
    }

    set userID(userID: string) {
        if (!Address.validateUserID(userID)) throw new EntityError("userID");
        this._userID = userID;
    }

    static validateUserID(userID: string) {
        if (userID.trim().length !== 36) return false;
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(userID);
    }

    get addressID() {
        return this._addressID;
    }

    set addressID(addressID: string) {
        if (!Address.validateAddressID(addressID))
            throw new EntityError("addressID");
        this._addressID = addressID;
    }

    static validateAddressID(addressID: string) {
        if (addressID === null) return false;
        else if (addressID.trim().length !== 36) return false;
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(addressID);
    }

    get city() {
        return this._city;
    }

    set city(city: string) {
        if (!Address.validateCity(city)) throw new EntityError("city");
        this._city = city;
    }

    static validateCity(city: string) {
        return city.trim().length > 3;
    }

    get state() {
        return this._state;
    }

    set state(state: BrazilianStateEnum) {
        if (!Address.validateState(state)) throw new EntityError("state");
        this._state = state;
    }

    static validateState(state: BrazilianStateEnum) {
        return Object.values(BrazilianStateEnum).includes(state);
    }

    get country() {
        return this._country;
    }

    set country(country: CountriesEnum) {
        if (!Address.validateCountry(country)) throw new EntityError("country");
        this._country = country;
    }

    static validateCountry(country: CountriesEnum) {
        return Object.values(CountriesEnum).includes(country);
    }

    get street() {
        return this._street;
    }

    set street(street: string) {
        if (!Address.validateStreet(street)) throw new EntityError("street");
        this._street = street;
    }

    static validateStreet(street: string) {
        return street.trim().length >= 4;
    }

    get complement() {
        return this._complement;
    }

    set complement(complement: string) {
        if (!Address.validateComplement(complement))
            throw new EntityError("complement");
        this._complement = complement;
    }

    static validateComplement(complement: string) {
        if (complement.trim().length < 2) throw new EntityError("complement");
        return true;
    }

    get zip_code() {
        return this._zip_code;
    }

    set zip_code(zip_code: string) {
        if (!Address.validateZipCode(zip_code))
            throw new EntityError("zip_code");
        this._zip_code = zip_code;
    }

    static validateZipCode(zip_code: string) {
        return zip_code.trim().length === 8;
    }

    toJson(): IAddress {
        return {
            userID: this._userID,
            addressID: this._addressID,
            city: this._city,
            complement: this._complement,
            country: this._country,
            state: this._state,
            street: this._street,
            zip_code: this._zip_code
        };
    }

    static fromJson(json: IAddress): Address {
        return new Address({
            userID: json.userID,
            addressID: json.addressID,
            city: json.city,
            complement: json.complement,
            country: json.country,
            state: json.state,
            street: json.street,
            zip_code: json.zip_code
        });
    }
}
