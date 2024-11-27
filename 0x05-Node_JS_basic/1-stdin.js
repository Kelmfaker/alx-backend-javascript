// stdin
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  const name = data.toString();
  process.stdout.write(`Your name is: ${name}\n`);
});
process.on('exit', () => {
  // eslint-disable-next-line no-console
  console.log('This important software is now closing');
});
