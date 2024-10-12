import { ObjectValues } from "@enums/ObjectValues.ts";

export const MaterialEnum = {
    COTTON: "COTTON",
    POLYESTER: "POLYESTER",
    WOOL: "WOOL",
    LEATHER: "LEATHER",
    SILK: "SILK",
    LINEN: "LINEN"
};

export type MaterialEnum = ObjectValues<typeof MaterialEnum>;
