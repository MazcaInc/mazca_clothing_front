import { ObjectValues } from "@enums/ObjectValues.ts";

export const SizeEnum = {
    EXTRA_SMALL: "PP",
    SMALL: "P",
    MEDIUM: "M",
    LARGE: "G",
    EXTRA_LARGE: "GG",
    XXL: "XG"
};

export type SizeEnum = ObjectValues<typeof SizeEnum>;
