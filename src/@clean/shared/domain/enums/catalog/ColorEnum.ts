import { ObjectValues } from "@enums/ObjectValues.ts";

export const ColorEnum = {
    BLUE: "BLUE",
    BLACK: "BLACK",
    WHITE: "WHITE",
    OFF_WHITE: "OFF_WHITE",
    PURPLE: "PURPLE",
    PINK: "PINK",
    YELLOW: "YELLOW",
    ORANGE: "ORANGE",
    RED: "RED",
    WINE: "WINE",
    GREEN: "GREEN",
    TURQUOISE: "TURQUOISE",
    BROWN: "BROWN",
    BEIGE: "BEIGE",
    GRAY: "GRAY"
};

export type ColorEnum = ObjectValues<typeof ColorEnum>;
