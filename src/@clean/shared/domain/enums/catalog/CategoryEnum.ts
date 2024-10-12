import { ObjectValues } from "@enums/ObjectValues.ts";

export const CategoryEnum = {
    CLOTHING: 1,
    FOOTWEAR: 2
};

export type CategoryEnum = ObjectValues<typeof CategoryEnum>;
