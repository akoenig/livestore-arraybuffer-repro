import { customAlphabet } from "nanoid";
const alphabet =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export function makeCreateProjectId() {
    return function createProjectId() {
        const nanoid = customAlphabet(alphabet, 5);

        return nanoid();
    };
}
