// 1-stdin.js
function main() {
    process.stdout.write('Welcome to Holberton School, what is your name?\n');

    process.stdin.on('data', (data) => {
        const name = data.toString().trim();
        process.stdout.write(`Your name is: ${name}\n`);
        if (!process.stdin.isTTY) {
            console.log('This important software is now closing');
        }
        process.exit();
    });
}

module.exports = main;

if (require.main === module) {
    main();
}
