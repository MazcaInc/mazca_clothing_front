import { ObjectValues } from "@enums/ObjectValues.ts";

export const StyleEnum = {
    CASUAL: "CASUAL",
    FORMAL: "FORMAL",
    SPORTY: "SPORTY",
    BUSINESS_CASUAL: "BUSINESS_CASUAL",
    ATHLETIC: "ATHLETIC"
};

export type StyleEnum = ObjectValues<typeof StyleEnum>;
