import { ObjectValues } from "@enums/ObjectValues.ts";

export const GenderEnum = {
    MALE: "MALE",
    FEMALE: "FEMALE",
    UNISEX: "UNISEX"
};

export type GenderEnum = ObjectValues<typeof GenderEnum>;
