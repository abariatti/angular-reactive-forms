import { Role } from "./role";

export class User {
    constructor(
        public name: String = null,
        public email: String  = null,
        public mobile: String = null,
        public role: Role = null
    ) { }
}