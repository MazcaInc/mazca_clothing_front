import { ObjectValues } from "@enums/ObjectValues.ts";

export const UserTypeEnum = {
    CLIENT: 1,
    MODERATOR: 2,
    ADMIN: 3
};

export type UserTypeEnum = ObjectValues<typeof UserTypeEnum>;
