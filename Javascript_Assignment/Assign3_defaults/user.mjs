export default class User {
    constructor(name) {
        this.name = name;
    }

    getInfo() {
        return `User Name: ${this.name}`;
    }
}

// Named export: Email validator
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
