import { ObjectValues } from "@enums/ObjectValues.ts";

export const AuthGenderEnum = {
    MALE: 1,
    FEMALE: 2,
    OTHER: 3,
    PREFER_NOT_SAY: 4
};

export type AuthGenderEnum = ObjectValues<typeof AuthGenderEnum>;
