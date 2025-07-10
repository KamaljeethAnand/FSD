import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a word: ', async (word) => {
    if (word.trim() !== '') {
        const utils = await import('./stringUtils.mjs');
        const capitalized = utils.capitalize(word);
        console.log('Capitalized Word:', capitalized);
    } else {
        console.log('No word entered.');
    }
    rl.close();
});
