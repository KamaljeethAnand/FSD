
import readline from 'readline';
import User from './user.mjs';
import { validateEmail } from './user.mjs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    rl.question('Enter your email: ', (email) => {
        const user = new User(name);
        console.log(user.getInfo());

        const isValid = validateEmail(email);
        console.log(`Is "${email}" a valid email?`, isValid ? "Yes" : "No");

        rl.close();
    });
});
